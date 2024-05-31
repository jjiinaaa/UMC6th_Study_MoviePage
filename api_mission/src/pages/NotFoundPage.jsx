import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Error from "../images/error.png";

const Background = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BackgourndImg = styled.img`
  padding-top: 150px;
`;

const EroorTitle = styled.h1`
  font-size: 35px;
  margin: 20px 0 20px;
  text-align: center;
`;

const ErrorMessage = styled.p`
  text-align: center;
  line-height: 25px;
  font-size: 14px;
  margin-bottom: 18px;
  color: #999;
`;

const ErrorSecondTitle = styled.h2`
  font-size: 14px;
  background-color: rgba(25, 25, 25, 0.1);
  border: 1px solid rgba(25, 25, 25, 0.1);
  padding: 10px 26px;
  border-radius: 5px;
  font-weight: 600;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();
  const homeClick = () => {
    navigate("/");
  };

  return (
    <Background>
      <BackgourndImg src={Error} alt="error" />
      <EroorTitle>요청한 페이지를 찾을 수 없습니다.</EroorTitle>
      <ErrorMessage>
        존재하지 않는 주소를 입력하셨거나,
        <br /> 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        <br /> 입력하신 주소가 정확한지 다시 한 번 확인해 주시기 바랍니다.{" "}
      </ErrorMessage>
      <ErrorSecondTitle onClick={homeClick}>메인으로 이동하기</ErrorSecondTitle>
    </Background>
  );
};

export default NotFoundPage;
