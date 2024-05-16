import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./NotFoundPage.css";
import Error from "../images/error.png";

const BackGround = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();
  const homeClick = () => {
    navigate("/");
  };

  return (
    <BackGround>
      <img src={Error} alt="error" />
      <h1>요청한 페이지를 찾을 수 없습니다.</h1>
      <p>
        존재하지 않는 주소를 입력하셨거나,
        <br /> 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        <br /> 입력하신 주소가 정확한지 다시 한 번 확인해 주시기 바랍니다.
      </p>
      <h2 onClick={homeClick}>메인으로 이동하기</h2>
    </BackGround>
  );
};

export default NotFoundPage;
