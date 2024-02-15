import { useState, useContext } from "react";
import "./App.css";
import { pageContext } from "./context/pageContext";
import { State } from "./context/State";
import { Hola } from "./components/Hola";

function App() {
  return (
    <>
      <State>
        <Hola></Hola>
      </State>
    </>
  );
}

export default App;
