import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const PosterImageBox = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 50%;
  height: 100%;
  position: absolute;
  top: 8%;
  left: 0%;
`;

const PosterImage = styled.img`
  display: block;
  margin: 8% auto 0;
  height: 80%;
`;

const TextBox = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 8%;
  left: 50%;
  width: 50%;
  height: 100%;
  color: white;
  padding: 0 20% 0 30px;
  box-sizing: border-box;
  overflow: auto;
  transition: all 0.5s ease-in-out;
`;

const MovieTitle = styled.div`
  display: block;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 8px;
`;

const MovieVote = styled.p`
  font-size: 14px;
  text-align: left;
  color: white;
  margin: 0;
`;

const MovieYears = styled.p`
  font-size: 14px;
  text-align: left;
  color: white;
  margin-bottom: 8px;
`;

const MovieOverview = styled.p`
  font-size: 10px;
  line-height: 16px;
  text-align: left;
  color: white;
  margin-bottom: 10px;
`;

const Back = styled.div`
  font-size: 20px;
  color: #fdfdfd;
  &:hover {
    cursor: pointer;
  }
`;

const BackgroundImageBox = styled.div`
  width: 100vw;
  background-color: black;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 8%;
  width: 100%;
  height: 100%;
  z-index: -9999;
  opacity: 0.8;
  background-size: cover;
`;

const DetailPage = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [star, Setstar] = useState(0);
  const movieId = useParams().id;

  useEffect(() => {
    async function axiosMovie() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
          },
        }
      );
      setMovie(res.data);
      Setstar(Math.round(res.data.vote_average));
    }
    axiosMovie();
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <PageContainer>
        <PosterImageBox>
          <PosterImage
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </PosterImageBox>
        <TextBox>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieVote>{`평점: ${"⭐️".repeat(star)}`}</MovieVote>
          <MovieYears>{`개봉일: ${movie.release_date}`}</MovieYears>
          <MovieOverview>
            {movie.overview
              ? movie.overview
              : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}
          </MovieOverview>
          <Back
            onClick={() => {
              navigate(-1);
            }}
          >
            🔙
          </Back>
        </TextBox>
      </PageContainer>
      <BackgroundImageBox style={{ backgroundColor: "black" }}>
        <BackgroundImage
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
        />
      </BackgroundImageBox>
    </div>
  );
};

export default DetailPage;
