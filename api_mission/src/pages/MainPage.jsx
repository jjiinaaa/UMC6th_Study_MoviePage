import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// commit test

const BackGround = styled.div`
  /* min-height: 82vh; */
  /* height: 100%; */
`;

const Banner = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* width: 100%; */
  padding: 117px 0 170px;
  background-color: #222;
  color: #e9e9e9;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  @media screen and (max-width: 620px) {
    font-size: 24px;
    padding: 127px 0 180px;
  }
`;

const Search = styled.div`
  width: 100%;
  text-align: center;
  background-color: #e9e9e9;
  color: #000;
  font-weight: bold;
  font-size: 30px;
  padding: 50px 0 160px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 620px) {
    font-size: 20px;
    padding: 70px 0 170px;
  }
`;

const SearchBarContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  margin: 20px auto;
  min-width: 250px;
`;

const SearchInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
`;

const SearchButton = styled.div`
  display: flex;
  margin-left: 15px;
  padding-bottom: 4px;
  cursor: pointer;
`;

const SearchBox = styled.div`
  background-color: #222;
  width: 80%;
  /* height: 70%; */
  display: ${(props) => (props.show ? "grid" : "none")};
  overflow-y: auto;
  margin: 10px auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  &::-webkit-scrollbar-track {
    background: #eaeaea;
    box-shadow: inset 5px 0px 8px black;
  }
  @media screen and (min-width: 1225px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1224px) and (min-width: 923px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 922px) and (min-width: 621px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

const PosterImage = styled.img`
  width: 200px;
  height: 300px;
  margin-bottom: 10px;
`;

const MovieTitle = styled.div`
  font-size: 14px;
  color: white;
  font-weight: 700;
`;

const MovieVote = styled.div`
  font-size: 10px;
  color: white;
`;

const MainPage = ({ login }) => {
  // PROPS로 유저네임을 받아서 배너에 출력 + 기존에 있던 유저네임 스테이트랑 관련 함수 지우기
  // 이유: 유저네임을 API로 받아오니까
  const [searchInput, setSearchInput] = useState("");
  const [userName, setUserName] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));
    const username = data.username;
    setUserName(username);
  }, []);

  const handleClick = (movieData) => {
    navigate(`/movie/${movieData.id}`, {
      state: {
        poster_path: movieData.poster_path,
        title: movieData.title,
        overview: movieData.overview,
        vote_average: movieData.vote_average,
        release_date: movieData.release_date,
        backdrop_path: movieData.backdrop_path,
      },
    });
  };

  const handleSearchValue = (e) => {
    setSearchInput(e.target.value);
  };

  const searchMovie = async (value) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${value}&language=ko-KR&page=1&region=1`,
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
    setLoading(false);
  };

  useEffect(() => {
    const delayDebounceTimer = setTimeout(() => {
      if (searchInput) {
        searchMovie(searchInput);
      } else {
        setSearchInput([]);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceTimer);
  }, [searchInput]);

  return (
    <BackGround>
      <Banner>{login ? `${userName}님 환영합니다.` : "환영합니다!"}</Banner>

      <Search>
        Find Your Movies!
        <SearchBarContainer>
          <SearchInput
            type="text"
            placeholder="영화 제목을 입력해주세요"
            value={searchInput}
            onChange={handleSearchValue}
          />
          <SearchButton type="button" disabled={!searchInput}>
            {loading ? "..." : "🔘"}
          </SearchButton>
        </SearchBarContainer>
        <SearchBox show={movieData.length > 0}>
          {movieData.map((movie) => (
            <SearchResult key={movie.id} onClick={() => handleClick(movie)}>
              <PosterImage
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieVote>⭐ {movie.vote_average}</MovieVote>
            </SearchResult>
          ))}
        </SearchBox>
      </Search>
    </BackGround>
  );
};

export default MainPage;
