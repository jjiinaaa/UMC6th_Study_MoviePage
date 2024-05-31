import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import home from "../images/home.png";

const Container = styled.div`
  width: 100%;
  height: 8vh;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* position: fixed;
  z-index: 10; */
  font-size: 14px;
  /* margin-right: 18px; */
`;

const SidebarContainer = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyleLinkTitle = styled(Link)`
  text-decoration: none;
  text-align: center;
  padding-top: 8px;
  color: white;
  &:hover {
    color: white;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  padding: 16px;
  color: #fff;
  font-size: 14px;
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
  font-size: 14px;
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

const SidebarStyleLink = styled(Link)`
  font-size: 18px;
  display: block;
  margin: 0 0 20px 20px;
  color: white;
`;

const header = (props) => {
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
        <StyleLinkTitle to="/">
          <img src={home} alt="UMC Movie" style={{ width: "50%" }} />
        </StyleLinkTitle>
      </LeftContainer>
      <RightContainer>
        <SidebarContainer>
          <StyleLink to="/SignUp">회원가입</StyleLink>
          <StyleLinkLogin to="/login" onClick={onLogin}>
            {loginId ? "로그인" : "로그아웃"}
          </StyleLinkLogin>
          <StyleLink to="/popular"> Popular</StyleLink>
          <StyleLink to="/nowplaying">Now Playing</StyleLink>
          <StyleLink to="/toprated">Top Rated</StyleLink>
          <StyleLink to="/upcoming">Upcoming</StyleLink>
        </SidebarContainer>
        <Sidebar width={300}>
          <SidebarStyleLink to="/SignUp">회원가입</SidebarStyleLink>
          <SidebarStyleLink to="/login" onClick={onLogin}>
            {loginId ? "로그인" : "로그아웃"}
          </SidebarStyleLink>
          <SidebarStyleLink to="/popular"> Popular</SidebarStyleLink>
          <SidebarStyleLink to="/nowplaying">Now Playing</SidebarStyleLink>
          <SidebarStyleLink to="/toprated">Top Rated</SidebarStyleLink>
          <SidebarStyleLink to="/upcoming">Upcoming</SidebarStyleLink>
        </Sidebar>
      </RightContainer>
    </Container>
  );
};

export default header;
