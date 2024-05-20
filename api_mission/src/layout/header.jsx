import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 8%;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  font-size: 14px;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyleLinkTitle = styled(Link)`
  text-decoration: none;
  text-align: center;
  padding: 16px;
  color: white;
  font-weight: 900;
  &:hover {
    color: white;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  padding: 16px;
  color: #fff;
  font-size: 18px;
  &:hover {
    transform: scale(1.1);
    color: white;
    border-bottom: 1px solid #fff;
  }
  @media screen and (max-width: 910px) {
    font-size: 12px;
    padding: 12px;
  }
`;

const StyleLinkLogin = styled(Link)`
  text-decoration: none;
  padding: 16px;
  color: orange;
  font-size: 18px;
  &:hover {
    transform: scale(1.1);
    color: orange;
    border-bottom: 2px solid #fff;
  }
  @media screen and (max-width: 910px) {
    font-size: 12px;
    padding: 12px;
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
        <StyleLinkTitle to="/">UMC Movie</StyleLinkTitle>
      </LeftContainer>
      <RightContainer>
        <StyleLink to="/SignUp">회원가입</StyleLink>
        <StyleLinkLogin to="/login" onClick={onLogin}>
          {loginId ? "로그인" : "로그아웃"}
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
