import Image from "next/image";

interface AboutProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

function About({ imageSrc, title, description, buttonText }: AboutProps) {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="w-full md:w-1/2">
            <Image
              src={imageSrc}
              alt="About Image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <h2 className="text-[36px] font-semibold text-[#4D4D4D] leading-[44px]">
              {title}
            </h2>
            <p className="text-gray-500">{description}</p>
            <button className="w-fit cursor-pointer bg-[#4CAF4F] text-white px-7 py-3 rounded-md">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
