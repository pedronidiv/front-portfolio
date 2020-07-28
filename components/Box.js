import React from "react";
import styled from "styled-components";

const Box = ({ aside, children }) => {
  return (
    <StyledBoxWrapper>
      <StyledBox>
        <StyledBoxAside>{aside}</StyledBoxAside>
        <StyledBoxCenter>{children}</StyledBoxCenter>
      </StyledBox>
    </StyledBoxWrapper>
  );
};

const StyledBoxCenter = styled.div`
  padding-left: 64px;
`

const StyledBoxWrapper = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: var(--container-width);
  max-width: 100%;
`;

const StyledBox = styled.section`
  background-color: #191919;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  width: 80%;
  border-top-left-radius: 24px;
  padding: 64px;
  box-shadow: 0 0 30px black;
`;

const StyledBoxAside = styled.aside`
  width: 200px;
  flex: 0 0 200px;
  text-align: right;
`;


export default Box;
