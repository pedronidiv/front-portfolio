import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        
      </Head>
      <LayoutStyled>
        <Header />
        {children}
      </LayoutStyled>
    </>
  );
};

const LayoutStyled = styled.div`
  padding-top: var(--header-height);
  min-height: 100vh;
  background-image: url(/img/background.jpg);
  background-size: cover;
  background-position: top center;
`;

export default Layout;
