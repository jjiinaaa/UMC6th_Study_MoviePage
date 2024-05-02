import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 8%;
  background-color: #0c0c41;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  padding: 16px;
  color: fff;
  &:hover {
    transform: scale(1.2);
    color: #fff;
    background-color: black;
  }
`;

const header = () => {
  return (
    <Container>
      <LeftContainer>
        <StyleLink to="/">UMC Movie</StyleLink>
      </LeftContainer>
      <RightContainer>
        <StyleLink to="/sign up">회원가입</StyleLink>
        <StyleLink to="/popular"> Popular</StyleLink>
        <StyleLink to="/nowplaying">Now Playing</StyleLink>
        <StyleLink to="/toprated">Top Rated</StyleLink>
        <StyleLink to="/upcoming">Upcoming</StyleLink>
      </RightContainer>
    </Container>
  );
};

export default header;
