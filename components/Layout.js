import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Head from "next/head";

export const Layout = ({ children, nav = [] }) => {
  return (
    <>
      <Head></Head>
      <LayoutStyled
      style={{
        backgroundImage: `url(${require('../public/img/background.jpg?webp')})`
      }}>
        <Header nav={nav} />
        {children}
        <Footer />
      </LayoutStyled>
    </>
  );
};

const LayoutStyled = styled.div`
  padding-top: var(--header-height);
  min-height: 100vh;
  background-size: cover;
  background-position: top center;
  z-index: 1;
  position: relative;
  @media(max-width: 1280px) {
    max-width: 100vw;
  }
`;

export default Layout;
