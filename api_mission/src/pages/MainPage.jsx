import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding-top: 50px;
  background-color: #222;
  color: #e9e9e9;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const Search = styled.div`
  width: 100%;
  height: 70%;
  text-align: center;
  background-color: #e9e9e9;
  color: #000;
  font-weight: bold;
  font-size: 30px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
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
  height: 70%;
  display: grid;
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

const MainPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/movie/${movie.title}`, {
      state: {
        poster_path: movie.poster_path,
        title: movie.title,
        overview: movie.overview,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        backdrop_path: movie.backdrop_path,
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
    const debounce = setTimeout(() => {
      if (searchInput) {
        searchMovie(searchInput);
      } else {
        setSearchInput([]);
      }
    }, 1000);

    return () => clearTimeout(debounce);
  }, [searchInput]);

  return (
    <>
      <Banner>Welcom to UMC Movie!</Banner>
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
        <SearchBox>
          {movieData.map((movie) => (
            <SearchResult key={movie.id} onClick={() => handleClick(movie)}>
              <PosterImage
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieVote>⭐ {movie.vote_average}</MovieVote>
            </SearchResult>
          ))}
        </SearchBox>
      </Search>
    </>
  );
};

export default MainPage;
