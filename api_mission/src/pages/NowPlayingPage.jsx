import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieComponent from "../components/movieComponent";
import { Loading } from "../components/Loader";

const NowPlayingPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);

  const getMovieData = async (page) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
          },
        }
      );

      // console.log(res);
      setMovieData((prevMovies) => [...prevMovies, ...res.data.results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + Math.floor(document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight
      ) {
        setPage((page) => page + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  useEffect(() => {
    getMovieData(page);
  }, [page]);

  return movieData.length === 0 ? (
    <Loading />
  ) : (
    <MovieComponent movieData={movieData} />
  );
};

export default NowPlayingPage;
