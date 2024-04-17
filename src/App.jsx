import { useState } from "react";
import Home from "./pages/Home";
import { NameContext } from "./contexts/Main";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Details from "./pages/Details";

function App() {
  const [namePoke, setNamePoke] = useState("");

  return (
    <>
      <NameContext.Provider value={namePoke}>
        <Router>
          <Routes>
            <Route index element={<Home setNamePoke={setNamePoke} />} />
            <Route path="details" element={<Details />} />
          </Routes>
        </Router>
      </NameContext.Provider>
    </>
  );
}

export default App;
