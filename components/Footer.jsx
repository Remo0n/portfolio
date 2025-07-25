import style from "../styles/Footer.module.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
const Footer = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.getHours() + ":" + current.getMinutes();
  return (
    <div className={style.footer}>
      <div>
        <p className={style.find}>find me in:</p>
        <a
          href="https://www.linkedin.com/in/remoonpeter/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsLinkedin />
          </span>
        </a>
        <a
          href="https://github.com/Remo0n"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsGithub />
          </span>
        </a>
        <a
          href="https://twitter.com/peter_remoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsTwitter />
          </span>
        </a>
      </div>
      <div>{time + " | " + date}</div>
    </div>
  );
};

export default Footer;
