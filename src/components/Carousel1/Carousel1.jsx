import React from "react";
import "./Carousel1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import video1 from "./video1.mp4";
import video2 from "./video1.mp4";
import video3 from "./video3.mp4";
import video4 from "./video4.mp4";
import video5 from "./video5.mp4";
const Carousel1 = () => {
    const videoSources = [
        video1,
        video2,
        video3,
        video4,
        video5
    ];

    return (
        <div className="carousel-container">
            {/* Swiper with Navigation */}
            <Swiper
                spaceBetween={10}
                slidesPerView={1.5}
                breakpoints={{
                    768: { slidesPerView: 1.5 },
                }}
                loop
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }} // Navigation buttons
                modules={[Navigation]}
                className="swiper-container"
            >
                {videoSources.map((video, index) => (
                    <SwiperSlide key={index} className="video-slide">
                        <video controls muted>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="swiper-button-prev">⟨</div>
            <div className="swiper-button-next">⟩</div>

            {/* Bottom and Right Corner Videos */}
            <div className="corner-video bottom-video">
                <video controls muted>
                    <source src={videoSources[0]} type="video/mp4" />
                </video>
            </div>
            <div className="corner-video right-video">
                <video controls muted>
                    <source src={videoSources[1]} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Carousel1;
