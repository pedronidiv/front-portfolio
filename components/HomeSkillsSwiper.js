import React, { useState, useCallback, useRef } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

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
        slidesPerView={3}
        onSwiper={setSwiper}
        breakpoints={{
          400: {
            slidesPerView: 1.3
          },
          1279: {
            slidesPerView: 3
          },
          1281: {
            slidesPerView: 4
          }
        }}
      >
        {list.map(({ background, icon, label }) => (
          <SwiperSlide key={icon}>
            <StyledSkillCard>
              <img src={require(`../public${background}?webp&resize&size=600`)} alt={label} />
              <i className={icon}></i>
              <span>{label}</span>
            </StyledSkillCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperWrapper>
  );
};

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

export default HomeSkillsSwiper;