import Home from "./pages/Home.jsx";
import Pokemon from "./pages/Pokemon.jsx";
import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app flex flex-col items-center gap-6 pb-5">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
