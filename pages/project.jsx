import { motion } from "framer-motion";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Seo from "../components/Seo";
import { site } from "../data/site";
import style from "../styles/Project.module.css";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Project = ({ pinnedItems }) => {
  return (
    <div className={style.page}>
      <Seo
        title="Work"
        description={`Selected work by ${site.name}, including a full-stack Airbnb clone and GitHub repositories.`}
      />
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <p className={style.kicker}>Work</p>
        <h1 className={style.title}>Selected projects</h1>

        <h2 className={style.sectionTitle}>Featured</h2>
        {site.featuredProjects.map((project) => (
          <article key={project.name} className={style.featured}>
            <p className={style.kind}>{project.kind}</p>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <ul className={style.stack}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.live || project.github ? (
              <p className={style.links}>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live site
                  </a>
                ) : null}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : null}
              </p>
            ) : null}
          </article>
        ))}

        <h2 className={style.sectionTitle}>Selected repositories</h2>
        {pinnedItems.length ? (
          <div className={style.grid}>
            {pinnedItems.map((item) => (
              <motion.article
                key={item.id}
                className={style.card}
                initial="hidden"
                animate="visible"
                variants={fade}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={style.cardHead}>
                  <h3>{item.name}</h3>
                  <span className={style.stars}>★ {item.stargazerCount}</span>
                </div>
                <p>{item.description || "No description provided."}</p>
                <a href={item.url} rel="noreferrer" target="_blank">
                  View on GitHub
                </a>
              </motion.article>
            ))}
          </div>
        ) : (
          <p className={style.empty}>
            GitHub repositories will appear here when the API token is available.
            Meanwhile, visit{" "}
            <a href={site.social.github} rel="noreferrer" target="_blank">
              github.com/Remo0n
            </a>
            .
          </p>
        )}
      </motion.div>
    </div>
  );
};

export async function getStaticProps() {
  let pinnedItems = [];

  try {
    if (!process.env.GITHUB_ACCESS_TOKEN) {
      return { props: { pinnedItems } };
    }

    const httpLink = createHttpLink({
      uri: "https://api.github.com/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({
      query: gql`
        {
          user(login: "Remo0n") {
            pinnedItems(first: 6) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    id
                    name
                    url
                    stargazerCount
                    description
                    forkCount
                  }
                }
              }
            }
          }
        }
      `,
    });

    pinnedItems = data.user.pinnedItems.edges.map((edge) => edge.node);
  } catch (error) {
    console.warn("Unable to load GitHub pinned repositories.", error);
  }

  return {
    props: { pinnedItems },
  };
}

export default Project;
