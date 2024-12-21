import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Feedback.css";
import feed1 from "./feed1.png"
import feed2 from "./feed2.png"

const feedbacks = [
  {
    id: 1,
    name: "Иван Иванов",
    age: 25,
    image: feed1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Анна Петрова",
    age: 30,
    image: feed2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Сергей Смирнов",
    age: 29,
    image: feed1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Feedback = () => {
  return (
    <div className="feedback-section">
      <h2 className="gal-title">Отзывы <span className="a"> <a href="" >Смотреть все</a></span></h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.5}
        navigation
        pagination={{ clickable: true }}
        className="feedback-swiper"
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback.id}>
            <div className="feedback-card">
              <img src={feedback.image} alt={`${feedback.name}`} className="feedback-image" />
              <div className="feedback-content">
                <h3>
                  {feedback.name}, {feedback.age} лет
                </h3>
                <p>{feedback.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default Feedback;
