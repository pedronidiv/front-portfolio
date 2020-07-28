import React from "react";
import styled from "styled-components";

/**
 * color primary, secondary
 */
const Title = ({ subTitle, title, color }) => {
  return (
    <StyledTitleWrapper className={color}>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
      <StyledTitle>{title}</StyledTitle>
    </StyledTitleWrapper>
  );
};

const StyledTitle = styled.div``;
const StyledSubTitle = styled.div``;

const StyledTitleWrapper = styled.div`
  margin-bottom: 32px;
  ${StyledTitle} {
    font-size: 32px;
    font-weight: 500;
    color: #f2f2f2;
    padding-bottom: 20px;
    position: relative;
    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    &::before {
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
    }
    &::after {
      height: 2px;
      width: 64px;
      background-color: var(
        ${(props) =>
          props.color ? "--color-" + props.color : "--color-primary"}
      );
    }
    & > * {
      font-weight: 500;
      font-size: inherit;
    }
  }
  ${StyledSubTitle} {
    font-size: 18px;
    color: var(
      ${(props) => (props.color ? "--color-" + props.color : "--color-primary")}
    );
    letter-spacing: 10px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
`;

export default Title;
