import "./App.css";

import { getCurrentTimeFormatted } from "./utils/getCurrentTime.js";
function App() {
  return (
    <>
      <h1>hola {getCurrentTimeFormatted()}</h1>
    </>
  );
}

export default App;
