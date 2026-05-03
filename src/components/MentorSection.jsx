import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./MentorSection.css";

const MentorSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("animate-in"),
        ),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      ?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const eventImages = [
    "/img/event-1.jpg",
    "/img/event-2.jpg",
    "/img/event-3.jpg",
    "/img/event-4.jpg",
    "/img/event-5.jpg",
    "/img/event-6.jpg",
  ];

  return (
    <section id="mentor" className="mentor-section" ref={ref}>
      <div className="mentor__container">
        <div className="mentor__badge reveal">
          MEET THE MAN WHO WENT FROM ZERO TO ₹1 CR+
        </div>

        <h2 className="mentor__name reveal">Mr. Adnan Qureshi</h2>

        <div className="mentor__content reveal">
          {/* Photo placeholder */}
          <div className="mentor__photo">
            <div className="mentor__photo-placeholder">
              <img src="/img/adnan sir.jpg" alt="mentor-img" />
            </div>
          </div>

          {/* Bio */}
          <div className="mentor__bio">
            <p>
              Adnan Qureshi, and I know exactly how you feel because I was once
              where you are now.
            </p>
            <p>
              Three years ago, I was buying expensive leads that never
              converted, getting my WhatsApp banned repeatedly, and facing
              constant family pressure about my "internet business" that wasn't
              making money.
            </p>
            <p>
              Today, I've built a ₹1 Cr+ online business empire using the exact
              AI Lead Ads Framework I'll be sharing with you, and more
              importantly, I've helped 650+ people just like you transform their
              struggles into success:
            </p>

            {/* Stats */}
            <div className="mentor__stats">
              <div className="mentor-stat">
                <div className="mentor-stat__value">15 Lakhs</div>
                <div className="mentor-stat__label">Monthly revenue</div>
              </div>
              <div className="mentor-stat">
                <div className="mentor-stat__value">100 +</div>
                <div className="mentor-stat__label">Success Stories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Event photos carousel - Swiper */}
        <div className="mentor__events reveal">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="events-carousel"
          >
            {eventImages.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="event-photo">
                  <img src={image} alt={`Event ${idx + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>

        {/* Press mentions */}
        {/* <div className="mentor__press reveal">
          <div className="press-badge">Hindustan Times</div>
          <div className="press-badge">Dainik Bhaskar</div>
          <div className="press-badge">India First</div>
          <div className="press-badge">Vision Ads</div>
        </div> */}
      </div>
    </section>
  );
};

export default MentorSection;
