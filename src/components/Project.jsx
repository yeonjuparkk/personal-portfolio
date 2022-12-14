import "./Project.css";
const Project = ({
  imgUrl,
  title,
  text,
  deployLink,
  gitHubLink,
  techStack,
}) => {
  return (
    <div className="portfolio__projects-container__project-card">
      <div className="portfolio__projects-container__project-image">
        {imgUrl ? <img src={imgUrl} alt="project-preview" /> : null}
      </div>
      <div className="portfolio__projects-container__project-info">
        <div className="portfolio__projects-container__project-title">
          <a href={deployLink} target="_blank" rel="noreferrer">
            <h1>{title}</h1>
          </a>
        </div>
        <div className="portfolio__projects-container__project-link">
          {gitHubLink ? (
            <a href={gitHubLink} target="_blank" rel="noreferrer">
              <h2>GitHub</h2>
            </a>
          ) : null}
        </div>
        <div className="portfolio__projects-container__project-text">
          <p>{text}</p>
        </div>
        <div className="portfolio__projects-container__project-tech-stack">
          <p>{techStack}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
