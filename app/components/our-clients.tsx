"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Community from "./community";

function Clients() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-8">
          <h2 className="text-[36px] text-[#4D4D4D] font-bold text-center">
            Our Clients
          </h2>
          <p className="text-gray-500 text-center text-[16px]">
            We have been working with some Fortune 500+ clients
          </p>

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="w-[90%] mx-auto h-full my-6"
            breakpoints={{
              320: {
                // mobile
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                // small tablets
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                // laptops
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                // large screens
                slidesPerView: 7,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <Image
                src="/client-1.png"
                alt="Client 1"
                width={80}
                className="object-cover"
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <Image
                src="/client-2.png"
                alt="Client 1"
                width={80}
                className="object-cover"
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <Image
                src="/client-3.png"
                alt="Client 1"
                width={80}
                className="object-cover"
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <Image
                src="/client-4.png"
                alt="Client 1"
                width={80}
                className="object-cover"
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <Image
                src="/client-5.png"
                alt="Client 1"
                width={80}
                className="object-cover"
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <Image
                src="/client-2.png"
                alt="Client 1"
                width={80}
                className="object-cover"
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <Image
                src="/client-6.png"
                alt="Client 1"
                width={80}
                className="object-cover"
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <Image
                src="/client-7.png"
                alt="Client 1"
                width={80}
                className="object-cover"
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <Image
                src="/client-4.png"
                alt="Client 1"
                width={80}
                className="object-cover"
                height={80}
              />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <Image
                src="/client-4.png"
                alt="Client 1"
                width={80}
                className="object-cover"
                height={80}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Clients;
