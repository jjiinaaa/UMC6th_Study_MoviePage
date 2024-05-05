import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieComponent from "../components/movieComponent";
import { Loading } from "../components/SpinnerLoader";

const NowPlayingPage = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTAzODQzNmI1Yjg4MGFkMWE3NmQyYmVhZTg2YjRiOSIsInN1YiI6IjY2MmYwZGZiMzU4MTFkMDEyYmU4ODkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZH-IwjfXV8KdWWnzC6QyyyzPB-fvwKC_UPqd3JU5sJI",
            },
            params: {
              language: "en-US",
              page: 1,
            },
          }
        );
        setMovieData(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieData();
  });

  return movieData.length === 0 ? (
    <Loading />
  ) : (
    <MovieComponent movieData={movieData} />
  );
};

export default NowPlayingPage;
