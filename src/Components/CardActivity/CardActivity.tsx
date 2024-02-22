import "./CardActivity.css";
export const CardActivity = ({ check, subtitle, title }) => {
  const { isCheckTask, setIsCheckTask } = check;
  console.log(isCheckTask);

  return (
    <article className="card-activity">
      <div className="card-activity-check-texts">
        <span
          onClick={() => setIsCheckTask(!isCheckTask)}
          className={`card-activity-check ${isCheckTask ? "active-check" : ""}`}
        ></span>
        <div className="card-activity-texts">
          <h3 className="card-activity-subtitle">{subtitle}</h3>
          <h2 className="card-activity-title">{title}</h2>
        </div>
      </div>
      <div className="card-activity-opcions">
        <h3 className="card-activity-edit">Editar</h3>
        <h3 className="card-activity-delete">Borrar</h3>
      </div>
    </article>
  );
};
