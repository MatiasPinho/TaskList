import "./App.css";
import { Home } from "./pages/Home/Home.jsx";
import { getCurrentTimeFormatted } from "./utils/getCurrentTime.js";
function App() {
  return (
    <>
      <header></header>
      <main>
        <Home></Home>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
