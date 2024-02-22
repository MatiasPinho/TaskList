import "./Header.css";
import { Projects } from "../../assets/icons/Projects";
import { Tasks } from "../../assets/icons/Tasks";
import { User } from "../../assets/icons/User";
import { Home } from "../../assets/icons/Home";
import { Plus } from "../../assets/icons/Plus";
export const Header = () => {
  return (
    <header className="header-fix-container">
      <nav className="navigation-container">
        <a className="navigation-link" href="">
          <Home />
          <h3>Inicio</h3>
        </a>
        <a className="navigation-link" href="">
          <Projects />
          <h3>Proyectos</h3>
        </a>
        <div className="navigation-link-circle-menu-toggle">
          <Plus />
        </div>
        <a className="navigation-link" href="">
          <Tasks />
          <h3>Tareas</h3>
        </a>
        <a className="navigation-link" href="">
          <User />
          <h3>Usuario</h3>
        </a>
      </nav>
    </header>
  );
};
