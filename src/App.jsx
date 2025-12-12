import { useState } from "react";
import "./App.css";
import { DarkModeContext, MovieContext } from "./Context/index.js";
import Page from "./Page";

function App() {
  // Using context here for supplying the data top to bottom.
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
