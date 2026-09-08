import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class SceneInit {
  constructor(canvasId, canvasEl) {
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.fov = 45;
    this.canvasId = canvasId;
    this.canvasEl = canvasEl;
    this.clock = undefined;
    this.controls = undefined;
    this.ambientLight = undefined;
    this.directionalLight = undefined;
    this.frameId = undefined;
    this._onResize = this.onWindowResize.bind(this);
  }

  initialize() {
    const canvasEL = document.getElementById(this.canvasEl);
    const canvas = document.getElementById(this.canvasId);
    if (!canvasEL || !canvas) return false;

    this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
      this.fov,
      canvasEL.offsetWidth / Math.max(canvasEL.offsetHeight, 1),
      0.1,
      1000
    );
    this.camera.position.z = 48;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(canvasEL.offsetWidth, canvasEL.offsetHeight);

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    this.directionalLight.position.set(0, 32, 64);
    this.scene.add(this.directionalLight);

    window.addEventListener("resize", this._onResize, false);
    return true;
  }

  animate() {
    this.frameId = window.requestAnimationFrame(this.animate.bind(this));
    this.controls?.update();
    this.render();
  }

  render() {
    if (!this.renderer || !this.scene || !this.camera) return;
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    const canvasEL = document.getElementById(this.canvasEl);
    if (!canvasEL || !this.camera || !this.renderer) return;
    this.camera.aspect = canvasEL.offsetWidth / canvasEL.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(canvasEL.offsetWidth, canvasEL.offsetHeight);
  }

  dispose() {
    if (this.frameId) cancelAnimationFrame(this.frameId);
    window.removeEventListener("resize", this._onResize);
    this.controls?.dispose();
    this.renderer?.dispose();
  }
}
