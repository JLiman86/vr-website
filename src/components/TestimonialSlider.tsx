import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slider } from "../data";
import { Autoplay } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        868: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1224: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
      }}
    >
      {slider.map((slide, idx) => {
        const { message, image, name, email } = slide;
        return (
          <SwiperSlide
            className="p-5 rounded-2xl 
          bg-gradient-to-t from-[#130613] via-[#2a1428] to-[#331a35]"
            key={idx}
          >
            <div className="text-sm">
              <p className="min-h-[60px] lg:min-h-[100px] overflow-hidden">
                {message}
              </p>
              <div className="flex mt-5 flex-col gap-5 lg:flex-row lg:items-center">
                <div>
                  <img className="w-14 " src={image} alt="" />
                </div>

                <div>
                  <h4 className="font-secondary font-medium mb-1">{name}</h4>
                  <p className="text-rose-200">{email}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
