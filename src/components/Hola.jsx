import { useContext } from "react";
import { pageContext } from "../context/pageContext";
export const Hola = () => {
  const { currentTimeReal } = useContext(pageContext);
  return <h1>¡Hola Mundo! {currentTimeReal}</h1>;
};
