import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const BackGround = styled.div`
  padding: 148px 0;
  background-color: #222;
  /* width: 100%; */
  /* height: 100%; */
  color: #fff;
  /* display: flex; */
  /* justify-content: center; */
`;

const SignUpForm = styled.form`
  width: 30%;
  padding: 100px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 50px 10px;
  background-color: rgba(155, 155, 155, 0.1);
  @media screen and (max-width: 910px) {
    min-width: 310px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 30px;
`;

const InputArea = styled.div`
  display: block;
  margin: 0 auto 16px;
  width: 80%;
`;
const InputBox = styled.input`
  width: 100%;
  margin-top: 4px;
  padding: 12px;
  box-sizing: border-box;
  line-height: 24px;
  border: 1px solid #fff;
  border-radius: 10px;
`;

const ErrorMessage = styled.div`
  margin-top: 2px;
  color: red;
  font-size: 12px;
  font-weight: 600;
`;

const SubmitButton = styled.button`
  display: block;
  margin: 20px auto 30px;
  line-height: 12px;
  font-size: 14px;
`;

const SignUpButton = styled.div`
  width: 35%;
  margin: 0 auto;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
`;

const Login = ({ setLogin }) => {
  const navigate = useNavigate();

  // 아이디
  const [id, setId] = useState("");
  const [idError, setIdError] = useState("");
  const [idCheckMessage, setIdCheckMessage] = useState(false);

  const onId = (e) => {
    const idValue = e.target.value;
    setId(idValue);
    idValidation(idValue);
  };

  const idValidation = async (id) => {
    const idForm = /^[\w_-]{5,}$/;
    if (id == "") {
      setIdError("아이디를 입력해주세요.");
      setIdCheckMessage(false);
    } else if (!idForm.test(id)) {
      setIdError("아이디의 형식이 아닙니다.");
      setIdCheckMessage(false);
    } else {
      setIdError("");
      setIdCheckMessage(true);
    }
  };

  // 비밀번호
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] = useState(false);

  const onPassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    passwordValidation(passwordValue);
  };
  const passwordValidation = async (password) => {
    const passwordForm =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{4,12}$/;

    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
      setPasswordCheckMessage(false);
    } else if (!passwordForm.test(password)) {
      setPasswordError("비밀번호가 틀립니다.");
      setPasswordCheckMessage(false);
    } else {
      setPasswordError("");
      setPasswordCheckMessage(true);
    }
  };

  // 최종 로그인
  const login = async (e) => {
    e.preventDefault();
    if (id === "") {
      setIdError("아이디를 입력해주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (idCheckMessage && passwordCheckMessage) {
      const user = { username: id, password: password };
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/login",
          user
        );
        alert("로그인 성공!");
        console.log(response.data);
        localStorage.setItem("token", JSON.stringify(response.data));
        setLogin(true);
        // 안돼서
        navigate("/");
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          alert("로그인 실패");
        }
      }
    }
  };

  // 회원가입 페이지 이동
  const signup = () => {
    navigate("/SignUp");
  };

  return (
    <BackGround>
      <SignUpForm>
        <Title>로그인</Title>
        <div>
          <InputArea>
            <div>
              <InputBox
                type="text"
                placeholder="🆔 아이디"
                id="id"
                onChange={onId}
              />
            </div>
            {idError && <ErrorMessage>{idError}</ErrorMessage>}
          </InputArea>
          <InputArea>
            <div>
              <InputBox
                type="password"
                placeholder="🤐 비밀번호"
                id="password"
                onChange={onPassword}
                autoComplete="off"
              />
              {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            </div>
          </InputArea>
        </div>

        <SubmitButton type="submit" onClick={login}>
          로그인
        </SubmitButton>
        <SignUpButton onClick={signup}>아이디가 없으신가요?</SignUpButton>
      </SignUpForm>
    </BackGround>
  );
};

export default Login;
