import Image from "next/image";

function Footer() {
  const url = ["/insta.png", "/web.png", "/yt.png", "/x.png"];
  return (
    <div className="w-full bg-[#263238]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto mt-6 py-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6 ">
            <Image
              src={"/footer-logo.png"}
              alt="image"
              height={170}
              width={170}
              className=" object-cover"
            />
            <div>
              <p className="text-[14px] text-[#F5F7FA]">
                Copyright © 2025 Nexcent ltd.
              </p>
              <p className="text-[14px] text-[#F5F7FA]">All rights reserved</p>
            </div>
            <div className="flex items-center gap-2">
              {url.map((item, idx) => (
                <div className="bg-[#42444A] p-2 rounded-full" key={idx}>
                  <Image
                    src={item}
                    alt="image"
                    height={20}
                    width={20}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:justify-self-end">
            <h1 className="text-white text-[20px] mb-4 font-semibold">
              Company
            </h1>
            <div className="flex flex-col gap-2 text-white cursor-pointer">
              <p>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <h1 className="text-white text-[20px] mb-4 font-semibold">
              Support
            </h1>
            <div className="flex flex-col gap-2 text-white cursor-pointer">
              <p>Help center</p>
              <p>Term of services</p>
              <p>Legal</p>
              <p>Privacy policy</p>
              <p>Status</p>
            </div>
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-4 font-semibold">
              Stay up to date
            </h1>
            <div className="flex gap-2 items-center justify-between bg-[#42444A] p-3 rounded-lg">
              <input
                type="text"
                placeholder="Your email address"
                className="text-white flex-1 outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <button className="bg-[#4CAF4F] cursor-pointer mt-4 text-white px-5 py-2 rounded-md">
              Subscribe &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
