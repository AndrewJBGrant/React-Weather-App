// import { createContext, useState } from "react";
import React from "react";
import "./App.css";
import WeatherSearch from "./Weather/WeatherSearch";
// import ReactSwitch from "react-switch";

// export const ThemeContext = createContext(null);

function App() {
//   const [theme, setTheme] = useState("dark");

//   const toggleTheme = () => {
// setTheme((current) => (current === "light" ? "dark" : "light"));
//   };
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <div className="App">
        <WeatherSearch defaultCity="Berlin" />
{/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/> */}
      </div>
    // </ThemeContext.Provider>
  );
}

export default App;
