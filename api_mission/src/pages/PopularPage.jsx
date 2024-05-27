import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieComponent from "../components/movieComponent";
import { Loading } from "../components/Loader";
import Pagination from "../components/Pagination";

const PopularPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovieData = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=ko-KR&region=KR&page=${currentPage}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
          },
        }
      );
      setMovieData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, [currentPage]);

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return movieData.length === 0 ? (
    <Loading />
  ) : (
    <>
      <MovieComponent movieData={movieData} />
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
      ></Pagination>
    </>
  );
};

export default PopularPage;
