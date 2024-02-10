import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Game } from "./components/Game/Game.jsx";
import { NotFound } from "./components/NotFound/NotFound.jsx";

function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:provider/:game" element={<Game />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;