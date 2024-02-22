import { FilterActivity } from "../../assets/icons/FilterActivity";
import { CardActivity } from "../CardActivity/CardActivity";
import { useState } from "react";
import Data from "../../temporaryData/data.json";
import "./RecentActivity.css";
export const RecentActivity = () => {
  const [isCheckTask, setIsCheckTask] = useState(false);
  return (
    <section className="recent-activity-container">
      <div className="recent-activity-h3-filter">
        <h3 className="recent-activity-h3">Actividad reciente</h3>
        <button className="filter-activity-button">
          <FilterActivity />
        </button>
      </div>
      <section className="recent-activity-show">
        {Data.map((card) => (
          <CardActivity
            check={{ isCheckTask, setIsCheckTask }}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </section>
    </section>
  );
};
