"use client";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-[#F5F7FA]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto h-20 flex items-center justify-between">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={100}
            height={50}
            className="w-40 h-6 object-cover"
          />

          <ul className="text-[16px] font-medium gap-10 items-center lg:flex hidden cursor-pointer">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>Faqs</li>
          </ul>

          <div className="lg:flex hidden items-center gap-6">
            <button className="text-[#4CAF4F]">Log in</button>
            <button className="bg-[#4CAF4F] text-white px-5 py-3 rounded-md">
              Sign up
            </button>
          </div>

          <Bars3Icon
            className="w-8 h-8 lg:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-[260px] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h3 className="text-lg font-semibold">Menu</h3>
          <XMarkIcon
            className="w-7 h-7 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="text-[16px] font-medium flex flex-col gap-6 p-6 cursor-pointer">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>Faqs</li>
        </ul>

        <div className="flex flex-col gap-4 px-6">
          <button className="text-[#4CAF4F] border border-[#4CAF4F] py-2 rounded-md">
            Log in
          </button>
          <button className="bg-[#4CAF4F] text-white py-2 rounded-md">
            Sign up
          </button>
        </div>
      </div>

      {/* Overlay (click to close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Header;
