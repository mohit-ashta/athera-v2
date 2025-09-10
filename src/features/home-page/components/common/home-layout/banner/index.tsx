import { Button } from "@/components/ui/button";
import React from "react";

export const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.webp')] bg-cover bg-center w-full flex items-center main-wrapper px-5">
      <div className="container mx-auto">
        <div className="max-w-[707px]">
          <h1 className="lg:text-5xl text-2xl font-semibold  lg:leading-16 leading-8 text-secondary">
            Seeking Help Takes Strength, Finding Help Should Not.
          </h1>
          <p className="font-light text-base leading-6 mt-6 text-secondary">
            A strong bond with your therapist is essential for effective care.
            Customize your search and connect with a mental health practitioner
            who aligns with your unique needs and preferences.
          </p>
          <Button variant={"default"} size={"default"} className="mt-10">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};
