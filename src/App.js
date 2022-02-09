import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import Routes from "./Components/Routes.js";
import { useState } from "react";

function App() {
  const [darkTheme, setdarkTheme] = useState(true);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 :text-gry-200 min-h-screen ">
        <Navbar darkTheme={darkTheme} setdarkTheme={setdarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
