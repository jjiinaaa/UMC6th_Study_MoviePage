import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "../src/layout/layout";
import MainPage from "./pages/MainPage";
import PopularPage from "./pages/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatePage";
import UpcomingPage from "./pages/UpcommigPage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./layout/header";
import Footer from "./layout/footer";

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <>
      <BrowserRouter>
        <Header login={login} setLogin={setLogin} setUserName={setUserName} />
        <Routes>
          <Route path="/" element={<MainPage login={login} />} />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/toprated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
