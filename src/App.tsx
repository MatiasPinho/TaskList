import "./App.css";
import { Navigation } from "./Components/header/Header.js";
import { Home } from "./pages/Home/Home.jsx";
import { getCurrentTimeFormatted } from "./utils/getCurrentTime.js";
function App() {
  return (
    <>
      <main>
        <Home></Home>
      </main>
      <header>
        <Navigation />
      </header>
      <footer></footer>
    </>
  );
}

export default App;
