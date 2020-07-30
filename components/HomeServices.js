import React, { useState, useCallback } from "react";
import Box from "./Box";
import Title from "./Title";
import BoxContent from "./BoxContent";
import BoxList from "./BoxList";
import Button from "./Button";
import styled from "styled-components";

const HomeServices = (props) => {
  const [activeListItem, setActiveListItem] = useState(null);

  return (
    <Box
      {...props}
      asideProps={{
        style: {
          width: 240,
          flex: '0 240 240px'
        }
      }}
      aside={
        <HomeServicesAside
          activeListItem={activeListItem}
          onListItemSelected={(key) => setActiveListItem(key)}
        />
      }
    >
      <Title subTitle="Serviços" title={<h2>{activeListItem?.label || 'Soluções para qualquer projeto'}</h2>} />
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
        <strong>E aí, vamos trocar uma ideia?</strong>
        <br />
        <br />
        <Button>
          Vamos
        </Button>
      </BoxContent>
    </Box>
  );
};

const HomeServicesAside = ({
  activeListItem,
  onListItemSelected = () => {},
}) => {
  const list = [
    {
      key: "aplicativos",
      label: "Aplicativos",
    },
    {
      key: "sites-institucionais",
      label: "Sites institucionais",
    },
    {
      key: "ecommerce",
      label: "E-commerce",
    },
    {
      key: "sistemas",
      label: "Sistemas",
    },
    
    {
      key: "plataformas",
      label: "Plataformas",
    },
    {
      key: "e-muito-mais",
      label: "E muito mais...",
    },
  ];

  const _onListItemSelected = useCallback((item) => {
    onListItemSelected(item);
    console.log(item);
  });
  return (
    <>
      <img
        src="/img/03.png"
        height="160"
        srcSet="/img/03.png 1x, /img/03@2x.png 2x,"
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

export default HomeServices;
