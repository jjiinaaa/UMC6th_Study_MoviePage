import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  padding: 10px 0;
  position: absolute;
  z-index: 9999;
`;

const Text = styled.p`
  font-size: 14px;
  padding-left: 20px;
  text-align: left;
  color: #fff;
`;

const Footer = () => {
  return (
    <Container>
      <Text>Copyright © 2024 UMC All rights reserved.</Text>
    </Container>
  );
};

export default Footer;
