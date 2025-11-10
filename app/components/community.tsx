import Image from "next/image";

function Community() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="w-full py-8 flex flex-col gap-2">
            <p className="text-[46px] text-[#4D4D4D] font-bold max-w-[700px] leading-[55px] mx-auto text-center">
              Manage your entire community in a single system
            </p>
            <p className="text-gray-500 text-center text-[16px]">
              Who is Nextcent suitable for?
            </p>
            <div className=" py-6 grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6 ">
              <div className="flex flex-col gap-3 items-center text-center">
                <Image
                  src="/service-3.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                  className="w-[80px] h-auto object-contain"
                />
                <h3 className="text-[24px] font-semibold text-[#4D4D4D]">
                  Membership <br /> Organisations
                </h3>
                <p className="text-gray-500 max-w-[300px]">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center text-center">
                <Image
                  src="/service-1.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                  className="w-[80px] h-auto object-contain"
                />
                <h3 className="text-[24px] font-semibold text-[#4D4D4D]">
                  National <br /> Associations
                </h3>
                <p className="text-gray-500 max-w-[300px]">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center text-center">
                <Image
                  src="/service-2.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                  className="w-[80px] h-auto object-contain"
                />
                <h3 className="text-[24px] font-semibold text-[#4D4D4D]">
                  Clubs And <br /> Groups
                </h3>
                <p className="text-gray-500 max-w-[300px]">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
