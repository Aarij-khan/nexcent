import React from "react";

function Demo() {
  return (
    <div className="w-full bg-[#F5F7FA]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] py-10 space-y-4 mx-auto flex flex-col justify-between items-center">
          <h1 className="text-[36px] max-w-[700px] text-center leading-[44px] md:text-[64px] md:leading-[76px]">
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <button className="bg-[#4CAF4F] cursor-pointer text-white px-5 py-3 rounded-md">
            Get a demo &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Demo;
