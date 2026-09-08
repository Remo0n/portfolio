import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import SceneInit from "../lib/SceneInit.js";
import styles from "../styles/Home.module.css";

function fitModel(object, targetSize = 26) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  object.position.sub(center);
  const longest = Math.max(size.x, size.y, size.z) || 1;
  object.scale.setScalar(targetSize / longest);
}

function frameObject(camera, controls, object) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const vFov = THREE.MathUtils.degToRad(camera.fov);
  const distance = ((size.y * 0.5) / Math.tan(vFov / 2)) * 1.32;
  camera.near = 0.1;
  camera.position.set(center.x, center.y, center.z + distance);
  camera.updateProjectionMatrix();
  camera.lookAt(center);
  if (controls) {
    controls.target.copy(center);
    controls.update();
  }
}

const Model = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scene = new SceneInit("canvasId", "canvasEl");
    const ready = scene.initialize();
    if (!ready) return undefined;

    scene.camera.position.set(0, 0, 38);
    scene.camera.fov = 32;
    scene.camera.near = 0.1;
    scene.camera.updateProjectionMatrix();
    if (scene.ambientLight) scene.ambientLight.color.set(0xc9b8a8);
    if (scene.directionalLight) {
      scene.directionalLight.color.set(0xffd2b3);
      scene.directionalLight.intensity = 2.4;
      scene.directionalLight.position.set(12, 22, 18);
    }
    if (scene.controls) {
      scene.controls.enablePan = false;
      scene.controls.enableZoom = false;
      scene.controls.target.set(0, 0, 0);
    }

    const fill = new THREE.DirectionalLight(0x8a7a6c, 0.7);
    fill.position.set(-18, 8, -12);
    scene.scene.add(fill);

    const root = new THREE.Group();
    scene.scene.add(root);

    let mixer;
    const mixerClock = new THREE.Clock();
    const loader = new GLTFLoader();

    loader.load("/model/RobotExpressive.glb", (gltf) => {
      const model = gltf.scene;
      fitModel(model, 26);
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = false;
          child.receiveShadow = false;
        }
      });
      root.add(model);
      scene.onWindowResize();
      root.updateMatrixWorld(true);
      frameObject(scene.camera, scene.controls, root);

      if (gltf.animations?.length) {
        mixer = new THREE.AnimationMixer(model);
        const idle =
          gltf.animations.find((clip) => /idle/i.test(clip.name)) ||
          gltf.animations[0];
        mixer.clipAction(idle).play();
        mixer.update(0);
        root.updateMatrixWorld(true);
        frameObject(scene.camera, scene.controls, root);
      }
    });

    scene.animate();

    let frameId;
    const tick = () => {
      mixer?.update(mixerClock.getDelta());
      if (!reduceMotion.matches) {
        root.rotation.y += 0.006;
      }
      frameId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      mixer?.stopAllAction();
      scene.scene.remove(root);
      scene.scene.remove(fill);
      fill.dispose?.();
      scene.dispose();
    };
  }, []);

  return (
    <div
      id="canvasEl"
      className={styles.canvasEl}
      role="img"
      aria-label="Interactive 3D robot model"
    >
      <canvas id="canvasId" />
    </div>
  );
};

export default Model;
