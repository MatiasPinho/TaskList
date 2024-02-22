import "./CardResume.css";

export const CardResume = ({ emoji, title, resume }) => {
  return (
    <article
      className={`card-resume ${
        title === "Mis tareas" ? "task-resume" : "project-resume"
      }`}
    >
      <div className="card-resume-texts">
        <p className="card-resume-emoji">{emoji}</p>
        <h1
          className={`card-resume-title ${
            title === "Mis tareas" ? "card-resume-title-task" : ""
          }`}
        >
          {title}
        </h1>
        <h2
          className={`card-resume-resume ${
            title === "Mis tareas" ? "card-resume-resume-task" : ""
          }`}
        >
          {resume}
        </h2>
      </div>
    </article>
  );
};
