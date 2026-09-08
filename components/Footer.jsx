import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { site } from "../data/site";
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <div className={style.links}>
          <p className={style.label}>Find me</p>
          <a
            className={style.icon}
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            className={style.icon}
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>
          <a
            className={style.icon}
            href={site.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <BsTwitter />
          </a>
          <a
            className={style.icon}
            href={`mailto:${site.email}`}
            aria-label="Email"
          >
            <HiOutlineMail />
          </a>
        </div>
        <p className={style.meta}>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
