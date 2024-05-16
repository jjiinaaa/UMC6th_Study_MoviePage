import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e9e9e9;
  width: 100%;
  padding: 20px 0 0;
`;

const Text = styled.p`
  font-size: 10px;
  padding-left: 20px;
  text-align: left;
`;

const Footer = () => {
  return (
    <Container>
      <Text>Copyright © 2024 UMC All rights reserved.</Text>
    </Container>
  );
};

export default Footer;
