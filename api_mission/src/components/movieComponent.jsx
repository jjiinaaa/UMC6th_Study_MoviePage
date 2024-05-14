import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  background-color: #222;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 100px 40px;
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ContentContainer = styled.div`
  background-color: black;
  padding: 10px;
  position: relative;
  overflow-y: auto;
  &:hover .movie-poster-container {
    opacity: 0.2;
  }
`;

const MovieOverview = styled.div`
  position: absolute;
  display: none;
  color: #fff;
  padding: 25px;
  z-index: 9;
  word-wrap: break-word;
  ${ContentContainer}:hover & {
    display: block;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  display: block;
  padding: 5px;
  box-sizing: border-box;
  z-index: 1;
`;

const MovieData = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
`;

const MovieComponent = ({ movieData }) => {
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

  return (
    <Background>
      <MovieContainer>
        {movieData.map((movie, index) => (
          <ContentContainer key={index}>
            <div>
              <MovieOverview className="movie-overview">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </MovieOverview>

              <div className="movie-poster-container">
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </div>

              <MovieData>
                <div>{movie.title}</div>
                <div>{movie.vote_average}</div>
              </MovieData>
            </div>
          </ContentContainer>
        ))}
      </MovieContainer>
    </Background>
  );
};

export default MovieComponent;
