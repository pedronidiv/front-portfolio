import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { scrollTo } from "../helpers";

const HomeBanner = (props) => {

  return (
    <StyledHomeBanner>
      <div>
        <StyledHomeBannerLeft>
          <img
            src="/img/banner/me.png"
            srcSet="/img/banner/me.png 1x, /img/banner/me@2x.png 2x"
            alt="Lucas Pedroni, foto de perfil"
          />
        </StyledHomeBannerLeft>
        <StyledHomeBannerRight>
          <img
            className="name"
            src="/img/banner/name.png"
            srcSet="/img/banner/name.png 1x, /img/banner/name@2x.png 2x"
            alt="Lucas Pedroni, nome"
          />
          <span className="subtitle">FULL STACK DEVELOPER</span>
          <br />
          <Link href="/about">
            <a>
              <Button style={{ marginTop: 32 }}>Me conheça</Button>
            </a>
          </Link>
          <br />
          <StyledHomeBannerScrollDown
            onClick={() => scrollTo(props.scrollToRef.current || props.scrollToRef)}
            src="/icon/scroll-down.svg"
            role="button"
          ></StyledHomeBannerScrollDown>
        </StyledHomeBannerRight>
      </div>
    </StyledHomeBanner>
  );
};

const StyledHomeBannerRight = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  .name {
    width: 500px;
    display: block;
    filter: brightness(1.2);
    margin: 0 auto 32px;
  }
  .subtitle {
    color: var(--color-secondary);
    font-size: 14px;
    letter-spacing: 10px;
  }
`;
const StyledHomeBannerScrollDown = styled.img`
  width: 20px;
  height: 21px;
  cursor: pointer;
  display: block;
  margin: 150px auto 0;
`;
const StyledHomeBannerLeft = styled.div`
  img {
    height: 750px;
    margin-right: 0;
    margin-left: auto;
    display: block;
  }
`;

const StyledHomeBanner = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  max-height: calc(750px + var(--header-height));
  position: relative;
  margin-top: calc(-1 * var(--header-height));
  padding-top: var(--header-height);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
  & > div {
    width: var(--container-width);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    background-image: linear-gradient(transparent, black);
    pointer-events: none;
  }
  &::before {
    content: "";
    width: 100%;
    height: 230px;
    position: absolute;
    left: 0;
    top: 100%;
    display: block;
    background-image: linear-gradient(black, transparent);
  }
`;

export default HomeBanner;
