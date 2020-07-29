import React, { useState, useCallback } from "react";
import Box from "./Box";
import Title from "./Title";
import BoxContent from "./BoxContent";
import BoxList from "./BoxList";
import Button from "./Button";
import styled from "styled-components";

const HomeAbout = () => {
  const [activeListItem, setActiveListItem] = useState("");

  return (
    <Box
      style={{
        marginTop: 'calc(-1 * var(--header-height))'
      }} 
      aside={
        <HomeAboutAside
          activeListItem={activeListItem}
          onListItemSelected={(key) => setActiveListItem(key)}
        />
      }
    >
      <Title subTitle="Sobre" title={<h2>Olá, me chamo Lucas Pedroni</h2>} />
      <BoxContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus
        id purus sed ornare. Quisque vehicula nisl placerat interdum dignissim.
        Sed rhoncus interdum augue. Proin in congue tellus. Aliquam pulvinar
        urna ut lorem iaculis, rutrum <a href="#">posuere</a> tortor egestas.
        <br />
        <br />
        Sed sit amet felis lorem. Ut elementum vestibulum ligula vitae aliquam.
        Pellentesque sit amet lorem laoreet, auctor sapien sed, sodales justo.
        In ac felis et augue rutrum consectetur non quis risus.
        <br />
        <br />
        <strong>Quer saber mais sobre minhas especializações?</strong>
        <br />
        <br />
        <Button
          onClick={() => {
            setActiveListItem("graduacao");
          }}
        >
          Quero!
        </Button>
      </BoxContent>
    </Box>
  );
};

const HomeAboutAside = ({ activeListItem, onListItemSelected = () => {} }) => {
  const list = [
    {
      key: "minha-biografia",
      label: "Minha biografia",
    },
    {
      key: "graduacao",
      label: "Graduação",
    },
    {
      key: "missao",
      label: "Missão",
    },
    {
      key: "visao",
      label: "Visão",
    },
    {
      key: "valores",
      label: "Valores",
    },
  ];

  const _onListItemSelected = useCallback((key) => {
    onListItemSelected(key);
    console.log(key);
  });
  return (
    <>
      <img
        src="/img/01.png"
        height="160"
        srcSet="/img/01.png 1x, /img/01@2x.png 2x,"
        alt=""
        className="brightness--2"
        style={{ marginBottom: 16 }}
      />
      <BoxList
        list={list}
        onItemSelected={_onListItemSelected}
        activeItem={activeListItem}
      ></BoxList>
    </>
  );
};

export default HomeAbout;
