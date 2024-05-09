import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackGround = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  color: #fff;
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
      <h1>Oops!</h1>
      <h3>예상치 못한 에러가 발생했습니다.</h3>
      <p>Not Found</p>
      <h2 onClick={homeClick}>메인으로 이동하기</h2>
    </BackGround>
  );
};

export default NotFoundPage;
