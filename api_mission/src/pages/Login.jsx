import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

const BackGround = styled.div`
  background-color: #222;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
`;

const SignUpForm = styled.form`
  width: 30%;
  margin: 0 auto;
  position: absolute;
  top: 30%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 60px 30px;
  background-color: rgba(155, 155, 155, 0.1);
`;

const Title = styled.div`
  padding-top: 10px;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 20px;
`;

const InputArea = styled.div`
  display: block;
  margin: 0 auto 16px;
  width: 90%;
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
  margin: 0 auto;
  text-align: center;
`;

const Login = () => {
  const navigate = useNavigate();

  // 아이디
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailCheckMessage, setEmailCheckMessage] = useState(false);

  const onEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    emailValidation(emailValue);
  };

  const emailValidation = async (email) => {
    const emailForm = /^[a-z0-9.\-_]+@([a-z0-9-]+\.)+[a-z]{2,6}$/;
    if (email == "") {
      setEmailError("아이디를 입력해주세요.");
      setEmailCheckMessage(false);
    } else if (!emailForm.test(email)) {
      setEmailError("아이디가 아닙니다.");
      setEmailCheckMessage(false);
    } else {
      setEmailError("");
      setEmailCheckMessage(true);
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
  const login = (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError("아이디를 입력해주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (emailCheckMessage && passwordCheckMessage) {
      alert("로그인 성공!");
      const userValue = {
        email: email,
        password: password,
      };
      console.log("사용자 정보 :", userValue);
      navigate("/");
    } else {
      console.log("로그인 실패");
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
                onChange={onEmail}
              />
            </div>
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </InputArea>
          <InputArea>
            <div>
              <InputBox
                type="password"
                placeholder="🤐 비밀번호"
                id="password"
                onChange={onPassword}
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
