import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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
    transform: scale(1.1);
    color: orange;
  }
`;

const StyleLinkLogin = styled(Link)`
  text-decoration: none;
  padding: 16px;
  color: orange;
  &:hover {
    transform: scale(1.1);
    color: orange;
  }
`;

const header = () => {
  const [loginId, setLoginId] = useState(false);
  const onLogin = () => {
    setLoginId(!loginId);
  };
  // const [clickSignUp, setClickSignUp] = useState("");
  // const navigate = useNavigate();
  // const goSignUp = (e) => {
  //   navigate("/signup");
  //   setClickSignUp(e.target.textContent);
  // };

  return (
    <Container>
      <LeftContainer>
        <StyleLink to="/">UMC Movie</StyleLink>
      </LeftContainer>
      <RightContainer>
        <StyleLink to="/signup">회원가입</StyleLink>
        <StyleLinkLogin onClick={onLogin}>
          {loginId ? "log in" : "log out"}
        </StyleLinkLogin>
        <StyleLink to="/popular"> Popular</StyleLink>
        <StyleLink to="/nowplaying">Now Playing</StyleLink>
        <StyleLink to="/toprated">Top Rated</StyleLink>
        <StyleLink to="/upcoming">Upcoming</StyleLink>
      </RightContainer>
    </Container>
  );
};

export default header;
