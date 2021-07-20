/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, Fragment, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

// IMAGES

const HomeBanner = () => {
  const [images, setImages] = useState([]);
  const features = [
    {
      title: "BRI Mobile app revamp",
      img: "/Untitled22333.png",
      slug: null,
      desc: "Company want to launch new feature for better costumer experience during pandemic time, my role as developer here are slicing, integrating API, compiling and deploying Android apps with react native",
    },
    {
      title: "OneMath Web apps",
      img: "/untitled.32ed3fefefe.png",
      slug: "www.guelagi.online",
      desc: "Learning behaviour has gradually evolved through the pandemic, an online learning platform is needed more than ever, so me and my friend whom teaching for living made this app, i'm responsible of UI-UX, backend, frontend, testing and deploying. Kindly visit www.guelagi.online give me feedback",
    },
    {
      title: "Makay Modular Toys",
      img: "/untitled.32ed3.png",
      slug: null,
      desc: "Playing is the easiest way for childern to learn, the fact is modular type is fun to play with and helpful for motoric system development, these 2 reasons inspiring Makay Toys design",
    },
    {
      title: "Transform Tandem Bike",
      img: "/hi19.JPG",
      slug: null,
      desc: "This basically the unification of 2 bike frames and special frame connector, so the owner can choose wether they want it to be tandem or single bike",
    },
    {
      title: "NFD Branding and Delivery Bag",
      img: "/709b89c7-d914-4a26-8fa7-9fa03c8a2122.jpg",
      slug: null,
      desc: "A Logistic Company in Indonesia launch their new feature, the food delivery, the high demand sector nowadays, the logo itself should be easy to recognize and tell people clear message of what NFD do, and NFD food delivery bag is designed to be a rigid, durable, easy access product",
    },
    {
      title: "Tokyo Gaming Center",
      img: "/3tokyo.jpg",
      slug: null,
      desc: "Tokyo is one of the best gaming center in town, famous youtuber, twitch streamer, pro players are among their regular guests, before the pandemic began normally once a week there will be a gaming competition and sponsored by the likes of Steelseries, Razer, HP",
    },
    {
      title: "Haengnam Stoneware Exhibition",
      img: "/69617707_683844098802685_1854445819903319106_n.jpg",
      slug: null,
      desc: "This held in Bali in 2019, the concept is to use shelving rack as sophisticated showcase and can load product stock",
    },
  ];

  return (
    <div className="home-banner-section">
      <Swiper
        className="home-banner"
        slidesPerView={2}
        spaceBetween={25}
        centeredSlides={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {features.map((feature, idx) => {
          return (
            <SwiperSlide className="home-banner-content">
              <img
                className="home-banner-content-img"
                src={feature.img}
                alt={idx}
                key={idx}
              />
              <div className="home-banner-content-txt">
                <h3 className="home-banner-content-txt-title">
                  {feature.title}
                </h3>
                <a href={feature.slug} className="home-banner-content-txt-desc">
                  {feature.slug}
                </a>

                <p className="home-banner-content-txt-desc">{feature.desc}</p>
                <p className="home-banner-content-txt-readmore">
                  <a href="">read more...</a>
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default withRouter(HomeBanner);
