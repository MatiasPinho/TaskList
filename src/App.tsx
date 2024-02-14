import { useState } from "react";
import "./App.css";
import { getCurrentTimeFormatted } from "./utils/getCurrentTime";

function App() {
  const [currentTimeReal, setCurrentTimeReal] = useState(
    getCurrentTimeFormatted()
  );

  setInterval(() => {
    setCurrentTimeReal(getCurrentTimeFormatted());
  }, 1000);

  return (
    <>
      <h1>¡Hola Mundo! {currentTimeReal}</h1>
    </>
  );
}

export default App;
