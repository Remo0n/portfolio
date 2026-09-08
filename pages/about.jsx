import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { site } from "../data/site";
import style from "../styles/About.module.css";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className={style.page}>
      <Seo
        title="About"
        description={`${site.name} is a ${site.role} based in ${site.location}, working ${site.workMode.toLowerCase()}.`}
      />
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <section className={style.intro}>
          <p className={style.kicker}>About</p>
          <h1 className={style.title}>{site.role}</h1>
          <p className={style.lede}>{site.summary}</p>
        </section>

        <section className={style.section} aria-labelledby="experience-heading">
          <h2 id="experience-heading" className={style.sectionTitle}>
            Experience
          </h2>
          {site.experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className={`${style.job} ${job.compact ? style.compact : ""}`}
            >
              <div className={style.meta}>
                <p className={style.period}>{job.period}</p>
                <p className={style.place}>
                  {[job.extra, job.location]
                    .filter((value, index, list) => value && list.indexOf(value) === index)
                    .join(" · ")}
                </p>
              </div>
              <div>
                <h3 className={style.jobTitle}>{job.title}</h3>
                <p className={style.company}>{job.company}</p>
                {job.compact ? (
                  <p className={style.compactNote}>{job.bullets[0]}</p>
                ) : (
                  <ul className={style.bullets}>
                    {job.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className={style.section} aria-labelledby="skills-heading">
          <h2 id="skills-heading" className={style.sectionTitle}>
            Skills
          </h2>
          <div className={style.grid}>
            {site.skills.map((group) => (
              <div key={group.group} className={style.skillGroup}>
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={style.section} aria-labelledby="education-heading">
          <h2 id="education-heading" className={style.sectionTitle}>
            Education
          </h2>
          <div className={style.eduList}>
            {site.education.map((item) => (
              <div key={`${item.org}-${item.period}`} className={style.edu}>
                <h3>{item.title}</h3>
                <p>
                  {item.org} · {item.period}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={style.section} aria-labelledby="languages-heading">
          <h2 id="languages-heading" className={style.sectionTitle}>
            Languages
          </h2>
          <dl className={style.lang}>
            {site.languages.map((item) => (
              <div key={item.name}>
                <dt>{item.name}</dt>
                <dd>{item.level}</dd>
              </div>
            ))}
          </dl>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
