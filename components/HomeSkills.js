import React, { useState, useCallback, useRef } from "react";
import Box from "./Box";
import Title from "./Title";
import BoxContent from "./BoxContent";

import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

const HomeSkills = () => {
  const [activeListItem, setActiveListItem] = useState("");

  return (
    <Box
      style={{
        marginTop: 64,
      }}
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
        subTitle="Habilidades"
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
        className="brightness--2"
        style={{ marginBottom: 16 }}
      />
    </>
  );
};

export const HomeSkillsSwiper = () => {
  const [swiper, setSwiper] = useState(null);

  const list = [
    {
      background: "/img/skills/01.jpg",
      icon: "devicon-apple-original",
      label: "iOS / iPadOS",
    },
    {
      background: "/img/skills/02.jpg",
      icon: "devicon-android-plain",
      label: "Android",
    },
    {
      background: "/img/skills/03.jpg",
      icon: "devicon-javascript-plain",
      label: "JavaScript",
    },
    {
      background: "/img/skills/01.jpg",
      icon: "devicon-angularjs-plain",
      label: "Angular",
    },
    {
      background: "/img/skills/02.jpg",
      icon: "devicon-react-plain",
      label: "React",
    },
    {
      background: "/img/skills/03.jpg",
      icon: "devicon-vuejs-plain",
      label: "Vue.js",
    },
    {
      background: "/img/skills/01.jpg",
      icon: "devicon-nodejs-plain",
      label: "Node.js",
    },
    {
      background: "/img/skills/02.jpg",
      icon: "devicon-php-plain",
      label: "PHP",
    },
    {
      background: "/img/skills/03.jpg",
      icon: "devicon-laravel-plain",
      label: "Laravel",
    },
    {
      background: "/img/skills/01.jpg",
      icon: "devicon-mysql-plain",
      label: "MySQL",
    },
  ];
  return (
    <StyledSwiperWrapper>
      <Swiper
        spaceBetween={16}
        style={{
          marginTop: 32,
        }}
        navigation
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        onSwiper={setSwiper}
      >
        {list.map(({ background, icon, label }) => (
          <SwiperSlide key={icon}>
            <StyledSkillCard>
              <img src={background} alt={label} />
              <i className={icon}></i>
              <span>{label}</span>
            </StyledSkillCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <StyledSwiperNext onClick={() => console.log(swiper.slideNext())}>
        NEXT
      </StyledSwiperNext>
    </StyledSwiperWrapper>
  );
};
const StyledSwiperNext = styled.div``;
const StyledSwiperWrapper = styled.div`
  --swiper-navigation-size: 24px;
  margin-left: calc(-1 * var(--box-padding));
  width: calc(100% + (2 * var(--box-padding)));
  .swiper-container {
    padding-left: var(--box-padding);
    padding-right: var(--box-padding);
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: inherit;
    height: 100%;
    top: 16px;
  }
  .swiper-button-next {
  }
`;

const StyledSkillCard = styled.div`
  --skill-card-height: 280px;
  height: var(--skill-card-height);
  position: relative;
  z-index: 1;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex-direction: column;
  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.3s;
  }
  &::after {
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  }
  span {
    font-size: 18px;
    color: white;
    z-index: 10;
    margin-bottom: 16px;
    text-align: center;
    opacity: 0;
    transition: 0.3s;
    transform: translateY(16px);
  }
  i {
    z-index: 2;
    font-size: 48px;
    color: var(--color-secondary-light);
    transition: all ease-in-out 0.3s;
    margin-bottom: calc(var(--skill-card-height) * 0.3);
  }
  img {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }
  &:hover {
    &::before {
      opacity: 0;
    }
    i {
      /* margin-bottom: 16px; */
      font-size: 44px;
    }
    span {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default HomeSkills;
