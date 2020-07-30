import React, { useState } from "react";
import Box from "./Box";
import Title from "./Title";
import BoxContent from "./BoxContent";
import HomeSkillsSwiper from "./HomeSkillsSwiper";


const HomeSkills = (props) => {
  const [activeListItem, setActiveListItem] = useState("");

  return (
    <Box
      {...props}
      direction="bottom right"
      asideProps={{
        style: {
          width: "250px",
          flex: "0 0 250px",
          textAlign: "left",
        },
      }}
      aside={
        <HomeSkillsAside
          activeListItem={activeListItem}
          onListItemSelected={(key) => setActiveListItem(key)}
        />
      }
      bottom={<HomeSkillsSwiper />}
    >
      <Title
        direction="right"
        color="secondary"
        subTitle="Conhecimentos"
        title={<h2>Desenvolvedor full stack</h2>}
      />
      <BoxContent>
        Um desenvolvedor full stack está sempre a procura de novos
        conhecimentos. Por isso possuo uma grande variadedade de técnologias
        disponíveis para qualquer situação.
      </BoxContent>
    </Box>
  );
};

const HomeSkillsAside = ({ activeListItem, onListItemSelected = () => {} }) => {
  return (
    <>
      <img
        src="/img/02.png"
        height="160"
        srcSet="/img/02.png 1x, /img/02@2x.png 2x,"
        alt=""
        className="brightness--2 hide-mobile"
        style={{ marginBottom: 16 }}
      />
    </>
  );
};


export default HomeSkills;
