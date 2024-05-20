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
  width: 40%;
  margin: 0 auto;
  position: absolute;
  top: 13%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px 0;
  background-color: rgba(155, 155, 155, 0.1);
  @media screen and (max-width: 910px) and (min-width: 440px) {
    min-width: 360px;
  }
  @media screen and (max-width: 439px) {
    min-width: 280px;
  }
`;

const Title = styled.div`
  padding-top: 10px;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 30px;
  @media screen and (max-width: 439px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const InputArea = styled.div`
  display: block;
  margin: 0 auto 16px;
  width: 70%;
  font-size: 14px;
  @media screen and (max-width: 439px) {
    font-size: 10px;
    margin: 0 auto 8px;
  }
`;
const InputBox = styled.input`
  width: 100%;
  margin-top: 4px;
  padding: 8px;
  box-sizing: border-box;
  line-height: 24px;
  border: 1px solid #fff;
  border-radius: 10px;
  @media screen and (max-width: 910px) {
    min-width: 250px;
    font-size: 10px;
  }
  @media screen and (max-width: 439px) {
    font-size: 10px;
    padding: 2px 2px 2px 2px;
    min-width: 120px;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 2px;
  color: red;
  font-size: 12px;
  font-weight: 600;
  @media screen and (max-width: 439px) {
    font-size: 8px;
  }
`;

const SubmitButton = styled.button`
  display: block;
  margin: 30px auto 20px;
  @media screen and (max-width: 439px) {
    font-size: 10px;
  }
`;

const LoginButton = styled.p`
  width: 30%;
  text-align: right;
  font-size: 14px;
  float: left;
  text-align: center;
  padding-right: 20%;
  @media screen and (max-width: 439px) {
    font-size: 12px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SignUp = () => {
  const navigate = useNavigate();

  // 이름
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameCheckMessage, setNameCheckMessage] = useState(false);

  const onName = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    nameValidation(nameValue);
  };

  const nameValidation = async (name) => {
    const nameForm = /^[가-힣a-zA-Z]+$/;
    if (name == "") {
      setNameError("이름을 작성해주세요.");
      setNameCheckMessage(false);
    } else if (!nameForm.test(name)) {
      setNameError("이름 형식에 맞게 작성해주세요.");
      setNameCheckMessage(false);
    } else {
      setNameError("");
      setNameCheckMessage(true);
    }
  };

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
      setIdError("아이디를 작성해주세요.");
      setIdCheckMessage(false);
    } else if (!idForm.test(id)) {
      setIdError("아이디 형식에 맞게 작성해주세요.");
      setIdCheckMessage(false);
    } else {
      setIdError("");
      setIdCheckMessage(true);
    }
  };

  // 이메일
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
      setEmailError("이메일을 입력해주세요.");
      setEmailCheckMessage(false);
    } else if (!emailForm.test(email)) {
      setEmailError("올바른 이메일 형식을 입력해주세요.");
      setEmailCheckMessage(false);
    } else {
      setEmailError("");
      setEmailCheckMessage(true);
    }
  };

  // 나이
  const [age, setAge] = useState(0);
  const [ageError, setAgeError] = useState("");
  const [ageCheckMessage, setAgeCheckMessage] = useState(false);

  const onAge = (e) => {
    const ageValue = e.target.value;
    setAge(ageValue);
    ageValidation(ageValue);
  };

  const ageValidation = async (age) => {
    const ageForm = /^[0-9]+$/;
    console.log("확인", Number.isNaN(parseInt(3.0)));
    if (age == "") {
      setAgeError("나이을 입력해주세요.");
      setAgeCheckMessage(false);
    } else if (parseInt(age) < 0) {
      setAgeError("음수 값은 입력할 수 없습니다.");
      setAgeCheckMessage(false);
    } else if (age % 1 != 0 && !Number.isNaN(parseInt(age))) {
      setAgeError("실수 값은 입력할 수 없습니다.");
      setAgeCheckMessage(false);
    } else if (!ageForm.test(age)) {
      setAgeError("올바른 나이을 입력해주세요.");
      setAgeCheckMessage(false);
    } else if (age < 19) {
      setAgeError("미성년자는 가입이 불가합니다.");
      setAgeCheckMessage(false);
    } else {
      setAgeError("");
      setAgeCheckMessage(true);
    }
    // 나이 validation
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
      setPasswordError(
        "비밀번호는 4~12자이여야하고 영어, 숫자, 특수문자를 모두 조합해서 작성해주세요."
      );
      setPasswordCheckMessage(false);
    } else {
      setPasswordError("");
      setPasswordCheckMessage(true);
    }
  };

  // 비밀번호 확인
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");
  const [
    passwordConfirmationCheckMessage,
    setPasswordConfirmationCheckMessage,
  ] = useState(false);

  const onPasswordConfirmation = (e) => {
    const passwordConfirmatioinValue = e.target.value;
    setPasswordConfirmation(passwordConfirmatioinValue);
    passwordConfirmationValidation(passwordConfirmatioinValue);
  };

  const passwordConfirmationValidation = async (passwordConfirmation) => {
    if (passwordConfirmation !== password) {
      setPasswordConfirmationError("비밀번호가 일치하지 않습니다.");
      setPasswordConfirmationCheckMessage(false);
    } else {
      setPasswordConfirmationError("");
      setPasswordConfirmationCheckMessage(true);
    }
  };

  // 최종 로그인
  const signUp = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError("이름을 입력해주세요");
    }
    if (name === "") {
      setIdError("아이디를 입력해주세요");
    }
    if (email === "") {
      setEmailError("이메일을 입력해주세요");
    }
    if (age === "") {
      setAgeError("나이를 입력해주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (passwordConfirmation === "") {
      setPasswordConfirmationError("비밀번호 확인");
    }
    if (
      nameCheckMessage &&
      idCheckMessage &&
      emailCheckMessage &&
      ageCheckMessage &&
      passwordCheckMessage &&
      passwordConfirmationCheckMessage
    ) {
      alert("회원가입 성공!");
      const userValue = {
        name: name,
        id: id,
        email: email,
        age: age,
        password: password,
        passwordConfirmation: passwordConfirmation,
      };
      console.log("사용자 정보 :", userValue);
      navigate("/login");
    } else {
      console.log("회원가입 실패");
    }
  };

  return (
    <BackGround>
      <SignUpForm>
        <Title>회원가입 페이지</Title>
        <div>
          <InputArea>
            <label htmlFor="name">이름</label>
            <div>
              <InputBox
                type="text"
                placeholder="김정은"
                id="name"
                onChange={onName}
              />
            </div>
            {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
          </InputArea>
          <InputArea>
            <label htmlFor="id">아이디</label>
            <div>
              <InputBox type="text" placeholder="id" id="id" onChange={onId} />
            </div>
            {idError && <ErrorMessage>{idError}</ErrorMessage>}
          </InputArea>
          <InputArea>
            <label htmlFor="email">이메일</label>
            <div>
              <InputBox
                type="text"
                placeholder="XXXXXXX@placeholder.com"
                id="email"
                onChange={onEmail}
              />
            </div>
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </InputArea>
          <InputArea>
            <label htmlFor="age">나이</label>
            <div>
              <InputBox
                type="text"
                placeholder="23"
                onChange={onAge}
                id="age"
              />
            </div>
            {ageError && <ErrorMessage>{ageError}</ErrorMessage>}
          </InputArea>
          <InputArea>
            <label htmlFor="password">비밀번호</label>
            <div>
              <InputBox
                type="password"
                placeholder="영문, 숫자, 특수기호 포함 및 4~12자"
                id="password"
                onChange={onPassword}
              />
              {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            </div>
          </InputArea>
          <InputArea>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <div>
              <InputBox
                type="password"
                placeholder="비밀번호 확인"
                id="passwordConfirm"
                onChange={onPasswordConfirmation}
              />
            </div>
            {passwordConfirmation && (
              <ErrorMessage>{passwordConfirmationError}</ErrorMessage>
            )}
          </InputArea>
        </div>

        <SubmitButton type="submit" onClick={signUp}>
          제출하기
        </SubmitButton>
        <p
          style={{
            fontSize: "12px",
            width: "30%",
            float: "left",
            paddingLeft: "20%",
            textAlign: "center",
            paddingTop: "5px",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          이미 아이디가 있으신가요?
        </p>
        <LoginButton>로그인 페이지로 이동하기</LoginButton>
      </SignUpForm>
    </BackGround>
  );
};

export default SignUp;
