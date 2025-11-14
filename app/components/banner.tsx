import Image from "next/image";

function Banner() {
  const stats = [
    { img: "/member.png", number: "2,245,341", label: "Members" },
    { img: "/clubs.png", number: "46,328", label: "Clubs" },
    { img: "/event.png", number: "828,867", label: "Event Bookings" },
    { img: "/payment.png", number: "1,926,436", label: "Payments" },
  ];
  return (
    <div className="w-full bg-[#F5F7FA]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] my-10 py-4 md:h-[40vh] mx-auto flex flex-col md:flex-row gap-10 md:gap-6 justify-between items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-[36px] font-semibold text-[#4D4D4D] leading-[44px]">
              Helping a local <br />{" "}
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h2>
            <p className="mt-1 text-[#4D4D4D] text-[16px] leading-[24px] ">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 space-y-4">
              {stats.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={35}
                    height={40}
                    className="object-cover"
                  />
                  <div>
                    <h3 className="text-[28px] font-semibold text-[#4D4D4D] leading-[28px]">
                      {item.number}
                    </h3>
                    <p className="text-gray-500">{item.label}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
