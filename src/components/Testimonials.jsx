import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../input.css";
import { Autoplay, Pagination } from "swiper";
import TestimonialProfile from "./TestimonialProfile";

function Testimonials() {
  return (
    <>
      <div className="hidden lg:block mt-20">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-between px-4 py-4 space-x-6">
              <div>kk</div>
              <div className="flex flex-col items-start text-left">
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  et, omnis est cumque quaerat obcaecati illum modi saepe
                  officiis atque, nesciunt
                </p>
                <p className="font-semibold pt-3 capitalize">My Name</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between px-4 py-4 space-x-6">
              <div>ll</div>
              <div className="flex flex-col items-start text-left">
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  et, omnis est cumque quaerat obcaecati illum modi saepe
                  officiis atque, nesciunt
                </p>
                <p className="font-semibold pt-3 capitalize">My Name</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between px-4 py-4 space-x-6">
              <div>kk</div>
              <div className="flex flex-col items-start text-left">
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  et, omnis est cumque quaerat obcaecati illum modi saepe
                  officiis atque, nesciunt
                </p>
                <p className="font-semibold pt-3 capitalize">My Name</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between px-4 py-4 space-x-6">
              <div>mm</div>
              <div className="flex flex-col items-start text-left">
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  et, omnis est cumque quaerat obcaecati illum modi saepe
                  officiis atque, nesciunt
                </p>
                <p className="font-semibold pt-3 capitalize">My Name</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-20 lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-between px-4 py-4 space-x-6">
              <div>kk</div>
              <div className="flex flex-col items-start text-left">
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  et, omnis est cumque quaerat obcaecati illum modi saepe
                  officiis atque, nesciunt
                </p>
                <p className="font-semibold pt-3 capitalize">My Name</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between px-4 py-4 space-x-6">
              <div>kk</div>
              <div className="flex flex-col items-start text-left">
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  et, omnis est cumque quaerat obcaecati illum modi saepe
                  officiis atque, nesciunt
                </p>
                <p className="font-semibold pt-3 capitalize">My Name</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between px-4 py-4 space-x-6">
              <div>ll</div>
              <div className="flex flex-col items-start text-left">
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  et, omnis est cumque quaerat obcaecati illum modi saepe
                  officiis atque, nesciunt
                </p>
                <p className="font-semibold pt-3 capitalize">My Name</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between px-4 py-4 space-x-6">
              <div>mm</div>
              <div className="flex flex-col items-start text-left">
                <p className="font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  et, omnis est cumque quaerat obcaecati illum modi saepe
                  officiis atque, nesciunt
                </p>
                <p className="font-semibold pt-3 capitalize">My Name</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Testimonials;