"use client";
import React from "react";
import Spinner from "../images/Spinner.gif";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadindText = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: black;
`;

export function Loading() {
  return (
    <Background>
      <LoadindText>Wait...</LoadindText>
      <img src={Spinner} alt="Loading" />;
    </Background>
  );
}
