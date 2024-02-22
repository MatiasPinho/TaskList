import { useState } from "react";
import { CardResume } from "../CardResume/CardResume";
import "./ResumeList.css";
export const ResumeList = () => {
  const [task] = useState("Mis tareas");
  const [project] = useState("Mis proyectos");
  const [taskNumber] = useState(300);
  const [projectNumber] = useState(50);
  return (
    <section className="resume-container">
      <CardResume emoji={"😉"} title={task} resume={taskNumber} />
      <CardResume emoji={"😉"} title={project} resume={projectNumber} />
    </section>
  );
};
