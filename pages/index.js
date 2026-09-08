import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ImDownload3 } from "react-icons/im";
import Seo from "../components/Seo";
import { site } from "../data/site";
import styles from "../styles/Home.module.css";

const Model = dynamic(() => import("../components/Model"), { ssr: false });

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  useEffect(() => {
    if (text.trim().toLowerCase() === "whois") {
      router.push("/about");
    }
  }, [router, text]);

  return (
    <div className={styles.page}>
      <Seo />
      <div className={styles.hero}>
        <motion.div
          className={styles.copy}
          initial="hidden"
          animate="visible"
          variants={fade}
        >
          <p className={styles.kicker}>
            {site.location} · {site.workMode}
          </p>
          <div>
            <h1 className={styles.title}>{site.name}</h1>
            <p className={styles.role}>{site.role}</p>
          </div>
          <p className={styles.lede}>{site.shortSummary}</p>
          <div className={styles.actions}>
            <Link href="/project" className={styles.button}>
              View work
            </Link>
            <a
              className={styles.ghost}
              href={site.resumePath}
              download
            >
              <ImDownload3 aria-hidden="true" style={{ marginRight: "0.45rem" }} />
              Download CV
            </a>
            <a className={styles.ghost} href={`mailto:${site.email}`}>
              Email
            </a>
          </div>
          <div className={styles.whois}>
            <p className={styles.whoisHint}>
              Prefer the old path? Type <code>whois</code> to continue.
            </p>
            <label className={styles.prompt}>
              <span className={styles.caret} aria-hidden="true">
                &#x276F;
              </span>
              <input
                type="text"
                value={text}
                placeholder="whois"
                aria-label="Type whois to open About"
                onChange={(event) => setText(event.target.value)}
                autoComplete="off"
                spellCheck="false"
              />
            </label>
          </div>
        </motion.div>
        <div className={styles.stage}>
          <Model />
        </div>
      </div>
    </div>
  );
}
