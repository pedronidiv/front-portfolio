import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import "isomorphic-fetch";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";
import HomeSkills from "../components/HomeSkills";

const Home = ({ data }) => {
  const aboutAnchorRef = useRef();

  return (
    <Layout>
      <HomeBanner scrollToRef={aboutAnchorRef} />
      <div id="aboutAnchor" ref={aboutAnchorRef}></div>
      <HomeAbout />
      <HomeSkills />
    </Layout>
  );
};

export default Home;
