/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, Fragment, useEffect } from "react";
import { withRouter, Link, Route } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper.scss";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

// IMAGES

const HomeBanner = () => {
  const [images, setImages] = useState([]);
  const features = [
    {
      title: "OneMath Web apps",
      img: "/untitled.32ed3fefefe.png",
      slug: "http://guelagi.online",
      shortSlug: "http://guelagi.online",
      prog: "in development",
      desc: "Learning behaviour has gradually evolved through the pandemic, an online learning platform is needed more than ever, so me and my friend whom teaching for living made this app, i'm responsible of UI-UX, backend, frontend, testing and deploying. Kindly visit www.guelagi.online give me feedback",
    },
    {
      title: "A Mobile Banking app revamp",
      img: "/Untitled2e2.png",
      slug: "TBC",
      shortSlug: "TBC",
      prog: "in development",
      desc: "Company want to launch new feature for better costumer experience during pandemic time, my role as developer here are slicing, integrating API, compiling and deploying Android apps with react native",
    },
    {
      title: "Makay Modular Toys",
      img: "/untitled.32ed3.png",
      slug: "https://seleb.tempo.co/read/606867/penghargaan-reka-baru-desain-diraih-14-pemenang",
      shortSlug: "https://seleb.tempo.co/r",
      prog: "2014",
      desc: "Playing is the easiest way for childern to learn, the fact is modular type is fun to play with and helpful for motoric system development, these 2 reasons inspiring Makay Toys design",
    },
    {
      title: "Transform Tandem Bike",
      img: "/hi19.JPG",
      slug: null,
      shortSlug: null,
      prog: "2012",
      desc: "This basically the unification of 2 bike frames and special frame connector, so the owner can choose whether they want it to be tandem or single bike",
    },
    {
      title: "NFD Branding and Delivery Bag",
      img: "/709b89c7-d914-4a26-8fa7-9fa03c8a2122.jpg",
      slug: "https://www.instagram.com/p/CPFziLJrSCa/?utm_medium=copy_link",
      shortSlug: "https://www.instagram.com/p/",
      prog: "2021",
      desc: "A Logistic Company in Indonesia launch their new feature, the food delivery, the high demand sector nowadays, the logo itself should be easy to recognize and tell people clear message of what NFD do, and NFD food delivery bag is designed to be a rigid, durable, easy access product",
    },
    {
      title: "Tokyo Gaming Space",
      img: "/3tokyo.jpg",
      slug: null,
      shortSlug: null,
      prog: "2021",
      desc: "Tokyo is one of the best gaming center in town, famous youtuber, twitch streamer, pro players are among their regular guests, before the pandemic began normally once a week there will be a gaming competition and sponsored by the likes of Steelseries, Razer, HP",
    },
    {
      title: "Haengnam Stoneware Exhibition",
      img: "/69617707_683844098802685_1854445819903319106_n.jpg",
      slug: null,
      shortSlug: null,
      prog: "2019",
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
        pagination={{
          dynamicBullets: true,clickable: true ,currentClass:'pagination-bullet'
        }}
        breakpoints={{
          // when window width is >= 320px
          300: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            // spaceBetween: 30,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 2,
          },
        }}
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
                <div className="home-banner-content-txt-slug">
                  <a
                    href={feature.slug}
                    target="_blank"
                    className="home-banner-content-txt-slug-link"
                  >
                    {feature.shortSlug}
                  </a>
                  -{" "}
                  <p className="home-banner-content-txt-slug-prog">
                    {feature.prog}
                  </p>
                </div>

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
