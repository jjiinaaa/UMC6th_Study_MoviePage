import React, { useEffect } from "react";
import { styled, css } from "styled-components";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

const HeaderbarContainer = styled.div`
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
  ${(props) =>
    props.logout &&
    css`
      color: #ffff;
      font-weight: 500;
    `}
  ${(props) =>
    props.$menuPath === props.pathname &&
    css`
      color: #ffff;
      font-weight: 500;
    `}
`;

const SidebarStyleLink = styled(Link)`
  font-size: 18px;
  display: block;
  margin: 0 0 20px 20px;
  color: white;
`;

const header = ({ login, handleLogin, handleLogout }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const homeClick = () => {
    navigate("/");
    window.location.href = "/";
  };

  useEffect(() => {
    const Login = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token.token);
        const response = await axios.get("http://localhost:8080/auth/me", {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
        // response를 이용해 username 설정
        if (response === null) return;
        handleLogin();
      } catch (error) {
        console.log(error + "헤더용 에러");
      }
    };

    Login();
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    handleLogout();
    // SetLogin 작동 안 함.
    // console.log(login);
  };

  return (
    <Container>
      <LeftContainer>
        <StyleLinkTitle onClick={homeClick}>
          <img src={home} alt="UMC Movie" style={{ width: "50%" }} />
        </StyleLinkTitle>
      </LeftContainer>
      <RightContainer>
        <HeaderbarContainer>
          {login ? (
            <StyleLinkLogin onClick={Logout} logout={login}>
              로그아웃
            </StyleLinkLogin>
          ) : (
            <>
              <StyleLinkLogin
                to="/login"
                $menuPath={"/login"}
                pathname={pathname}
              >
                로그인
              </StyleLinkLogin>
              <StyleLinkLogin
                to="/SignUp"
                $menuPath={"/signup"}
                pathname={pathname}
              >
                회원가입
              </StyleLinkLogin>
            </>
          )}

          <StyleLink to="/popular" $menuPath={"/popular"} pathname={pathname}>
            Popular
          </StyleLink>
          <StyleLink
            to="/nowplaying"
            $menuPath={"/nowplaying"}
            pathname={pathname}
          >
            Now Playing
          </StyleLink>
          <StyleLink to="/toprated" $menuPath={"/toprated"} pathname={pathname}>
            Top Rated
          </StyleLink>
          <StyleLink to="/upcoming" $menuPath={"/upcoming"} pathname={pathname}>
            Upcoming
          </StyleLink>
        </HeaderbarContainer>
        <Sidebar width={300}>
          {login ? (
            <SidebarStyleLink onClick={Logout} logout={login}>
              로그아웃
            </SidebarStyleLink>
          ) : (
            <>
              <SidebarStyleLink
                to="/login"
                $menuPath={"/login"}
                pathname={pathname}
              >
                로그인
              </SidebarStyleLink>
              <SidebarStyleLink
                to="/SignUp"
                $menuPath={"/signup"}
                pathname={pathname}
              >
                회원가입
              </SidebarStyleLink>
            </>
          )}
          <SidebarStyleLink
            to="/popular"
            $menuPath={"/popular"}
            pathname={pathname}
          >
            Popular
          </SidebarStyleLink>
          <SidebarStyleLink
            to="/nowplaying"
            $menuPath={"/nowplaying"}
            pathname={pathname}
          >
            Now Playing
          </SidebarStyleLink>
          <SidebarStyleLink
            to="/toprated"
            $menuPath={"/toprated"}
            pathname={pathname}
          >
            Top Rated
          </SidebarStyleLink>
          <SidebarStyleLink
            to="/upcoming"
            $menuPath={"/upcoming"}
            pathname={pathname}
          >
            Upcoming
          </SidebarStyleLink>
        </Sidebar>
      </RightContainer>
    </Container>
  );
};

export default header;
