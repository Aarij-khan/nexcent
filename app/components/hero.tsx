import Image from "next/image";

function Hero() {
  return (
    <div className="w-full bg-[#F5F7FA]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] md:h-[80vh] mx-auto gap-4 md:gap-0 flex md:flex-row flex-col items-center justify-between">
          <div className="w-full md:w-1/2 flex pt-6 md:pt-0 flex-col items-center text-center md:text-left md:items-start gap-3">
            <h1 className="text-[35px] md:text-[60px] md:leading-[76px] font-bold text-[#0F172A]">
              Lessons and insights{" "}
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="text-gray-500">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="w-fit bg-[#4CAF4F] text-white px-7 py-3 rounded-md">
              Register
            </button>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-end">
            <Image
              src="/Illustration.png"
              alt="Hero Image"
              width={400}
              height={400}
              className="w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
