"use client";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  const getYear = new Date();

  return (
    <footer>
      <div className="bg-[#31502A] py-6 font-inter px-4">
        <div className="container flex lg:flex-row flex-col gap-4 justify-between ">
          <ul className="flex lg:gap-[47px] gap-5 flex-wrap">
            <li className="font-light lg:text-base text-[13px] leading-6 cursor-pointer">
              Privacy policy
            </li>
            <li className="font-light lg:text-base text-[13px] leading-6 cursor-pointer">
              Cookie settings
            </li>
            <li className="font-light lg:text-base text-[13px] leading-6 cursor-pointer">
              Terms & conditions
            </li>
          </ul>

          <ul className="flex gap-4 justify-end  items-center">
            <li className="cursor-pointer">
              <Image
                src={"/assets/facebook.png"}
                alt="athera-logo"
                width={24}
                height={24}
              />
            </li>
            <li className="cursor-pointer">
              <Image
                src={"/assets/twitter.png"}
                alt="athera-logo"
                width={24}
                height={24}
              />
            </li>
            <li className="cursor-pointer">
              <Image
                src={"/assets/insta.png"}
                alt="athera-logo"
                width={24}
                height={24}
              />
            </li>
            <li className="cursor-pointer">
              <Image
                src={"/assets/linked.png"}
                alt="athera-logo"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-[#2A3727]">
        <h3 className="font-inter font-normal text-[#A3A4A2] text-sm leading-5 py-2">
          © Therapy.ca | {getYear.getFullYear()}
        </h3>
      </div>
    </footer>
  );
};
