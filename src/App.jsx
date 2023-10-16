import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Applied from "./pages/Applied";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-[100vh] px-[10%] overflow-auto no-scrollbar font-satoshi tracking-wide">
      <Header />
      <div className="h-full mx-[5%] overflow-auto no-scrollbar">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/applied" element={<Applied />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
