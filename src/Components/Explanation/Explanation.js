import React, { Component } from "react";
import styled from "styled-components";

const ExBody = styled.div`
  height: 100vh;
  width: 100%;
  background: purple;
`;

const Explanation = () => {
  return (
    <ExBody>
      <p>hey this is what this app does</p>
    </ExBody>
  );
};

export default Explanation;
