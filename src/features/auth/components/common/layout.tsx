import Image from "next/image";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children?: ReactNode;
  authTitle: string;
}

export const AuthLayout = ({ children, authTitle }: AuthLayoutProps) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen relative px-5 lg:px-0">
      <div className="h-full w-[360px] mx-auto">
        <Image
          src={"/assets/athera-logo.webp"}
          alt="athera-logo"
          width={120}
          height={140}
        />

        <div className="lg:mt-11 mt-4">
          <h3 className="text-primary lg:text-[32px] text-xl font-semibold leading-10">
            {authTitle}
          </h3>
          {children}
        </div>
      </div>
      <div className="h-dvh w-1/2 md:block hidden relative">
        <Image
          src={"/assets/auth-image.webp"}
          alt="athera-logo"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-1/4 left-1/6 text-secondary">
          <h3 className="font-semibold text-[32px] leading-10">
            Connect. Trust. Heal.
          </h3>
          <p className="font-light leading-6 text-base mt-4">
            Your journey to improved mental health
          </p>
        </div>
      </div>
    </div>
  );
};
