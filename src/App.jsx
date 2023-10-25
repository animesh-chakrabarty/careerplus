import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Applied from "./pages/Applied";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobDetailsPage from "./pages/JobDetailsPage";

const App = () => {
  return (
    <div className="h-[100vh] px-[10%] max-xl:px-[5%] max-lg:px-[1%] overflow-hidden font-satoshi tracking-wide">
      <Header />
      <div className="h-full mx-[5%] max-xl:mx-[0%] max-lg:mx-[1%] overflow-auto no-scrollbar ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/applied" element={<Applied />} />
          <Route path="/jobDetails/:jobId" element={<JobDetailsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
