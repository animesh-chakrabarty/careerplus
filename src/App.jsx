import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Applied from "./pages/Applied";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobDetailsPage from "./pages/JobDetailsPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBookmark } from "./redux/BookmarkedJobSlice";
import SearchResultPage from "./pages/SearchResultPage";

const App = () => {
  const dispatch = useDispatch();

  // set bookmarkedJobs state to already bookmarked Jobs (stored in local storage)
  useEffect(() => {
    const bookmarkedJobs = localStorage.getItem("careerPlus_bookmarked");

    bookmarkedJobs && dispatch(setBookmark(JSON.parse(bookmarkedJobs)));
  }, []);

  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className=" h-[94vh]  px-[10%] max-xl:px-[5%] max-lg:px-[1%] max-md:px-[0%] overflow-hidden font-satoshi tracking-wide">
        <Header />
        <div className="h-full mx-[5%] max-xl:mx-[0%]  overflow-hidden no-scrollbar ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/applied" element={<Applied />} />
            <Route path="/jobDetails/:jobId" element={<JobDetailsPage />} />
            <Route
              path="/jobs/:jobRole/:location"
              element={<SearchResultPage />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default App;
