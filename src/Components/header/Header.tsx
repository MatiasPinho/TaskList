import "./Header.css";
export const Navigation = () => {
  return (
    <nav className="navigation-container">
      <a className="navigation-link navigation-link-circle-menu-toggle" href="">
        +
      </a>
      <a className="navigation-link" href="">
        Proyectos
      </a>
      <a className="navigation-link" href="">
        Tareas
      </a>
      <a className="navigation-link" href="">
        Usuario
      </a>
      <a className="navigation-link" href="">
        Opciones
      </a>
    </nav>
  );
};
