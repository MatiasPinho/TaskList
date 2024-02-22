import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home/Home.tsx";
import { Root } from "./Root/Root.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Root>
          <Home />
        </Root>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
