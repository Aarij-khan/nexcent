"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const clients = [
  "/client-1.svg",
  "/client-2.svg",
  "/client-3.svg",
  "/client-4.svg",
  "/client-5.svg",
  "/client-2.svg",
  "/client-1.svg",
  "/client-3.svg",
  "/client-5.svg",
];

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
              320: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 7, spaceBetween: 10 },
            }}
          >
            {clients.map((img, i) => (
              <SwiperSlide key={i} className="flex justify-center items-center cursor-pointer">
                <Image
                  src={img}
                  alt={`Client ${i + 1}`}
                  width={200} // increase internal render width
                  height={200}
                  className="w-[80px] h-[50px] object-cover" // display size
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Clients;
