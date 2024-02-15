import { pageContext } from "./pageContext";
import { getCurrentTimeFormatted } from "../utils/getCurrentTime.js";
import { useState } from "react";

export const State = ({ children }) => {
  const [currentTimeReal, setCurrentTimeReal] = useState(
    getCurrentTimeFormatted()
  );

  setInterval(() => {
    setCurrentTimeReal(getCurrentTimeFormatted());
  }, 1000);

  return (
    <pageContext.Provider value={{ currentTimeReal }}>
      {children}
    </pageContext.Provider>
  );
};
