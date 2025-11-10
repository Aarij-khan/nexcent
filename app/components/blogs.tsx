import Image from "next/image";

function Blogs() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10 text-center space-y-1">
          <h1 className="text-[#4D4D4D] text-[36px] font-semibold">
            Caring is the new marketing
          </h1>
          <p className="text-gray-500 md:max-w-[600px] mx-auto">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 pb-10">
            <div className="h-[280px] rounded-lg relative">
              <Image
                src={"/blog-1.png"}
                alt="image"
                height={300}
                width={400}
                className="cursor-pointer rounded-lg"
              />
              <div className="absolute space-y-1.5 p-4 bottom-[-4rem] left-1/2 transform -translate-x-1/2 w-[80%] bg-white h-[140px] rounded-lg text-center">
                <h3 className="text-[20px] leading-[28px]">
                  Creating Streamlined Safeguarding Processes with OneRen
                </h3>
                <p className="text-[#4CAF4F] text-[16px] cursor-pointer">Read more &rarr;</p>
              </div>
            </div>
            <div className="h-[280px] rounded-lg relative">
              <Image
                src={"/blog-2.png"}
                alt="image"
                height={300}
                width={400}
                className="cursor-pointer rounded-lg"
              />
              <div className="absolute space-y-1.5 p-4 bottom-[-4rem] left-1/2 transform -translate-x-1/2 w-[80%] bg-white h-[140px] rounded-lg text-center">
                <h3 className="text-[20px] leading-[28px]">
                  Creating Streamlined Safeguarding Processes with OneRen
                </h3>
                <p className="text-[#4CAF4F] text-[16px] cursor-pointer">Read more &rarr;</p>
              </div>
            </div>
            <div className="h-[280px] rounded-lg relative">
              <Image
                src={"/blog-3.png"}
                alt="image"
                height={300}
                width={400}
                className="cursor-pointer rounded-lg"
              />
              <div className="absolute space-y-1.5 p-4 bottom-[-4rem] left-1/2 transform -translate-x-1/2 w-[80%] bg-white h-[140px] rounded-lg text-center">
                <h3 className="text-[20px] leading-[28px]">
                  Creating Streamlined Safeguarding Processes with OneRen
                </h3>
                <p className="text-[#4CAF4F] text-[16px] cursor-pointer">Read more &rarr;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
