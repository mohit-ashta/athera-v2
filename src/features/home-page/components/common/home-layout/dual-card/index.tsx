import Image from "next/image";
import React from "react";
import { cardImage } from "./constant";

export const DualCard = () => {
  return (
    <div className="bg-foreground lg:mt-[66px] mt-10 px-4 lg:px-0">
      <div className="container py-[66px] flex flex-col lg:gap-[66px] gap-11">
        {/* Section 1 */}
        <div className="lg:flex items-center justify-between w-full">
          <Image
            src="/assets/image-card.png"
            alt="Explore & filter"
            width={786}
            height={530}
          />
          <div className="lg:max-w-[40%] mr-auto">
            <h4 className="font-semibold lg:text-2xl text-xl leading-10 text-secondary">
              Explore & filter
            </h4>
            <h6 className="lg:mt-4 mt-1 font-medium lg:text-base text-sm leading-6 text-secondary">
              At Therapy, we believe in choice.
            </h6>
            <p className="lg:mt-6 mt-2 font-light lg:text-base text-sm leading-6 text-muted-foreground">
              Our goal is to help you find a therapist that fits your needs,
              someone you can share a connection with right from the start. View
              hundreds of independent therapists and filter based on your needs
              OR create a free account, answer a few questions and we can help
              narrow the search for you.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="lg:w-[983px] mx-auto flex flex-col lg:gap-[158px] gap-10">
          <div className="lg:flex flex-row-reverse items-center gap-15">
            <Image
              src="/assets/Bookmarks.png"
              alt="Save preferences"
              width={540}
              height={342}
            />
            <div className="flex-1 mt-5 lg:mt-0">
              <h4 className="font-semibold lg:text-2xl text-xl leading-10 text-secondary">
                Save preferences
              </h4>
              <h6 className="lg:mt-4 mt-2 font-medium lg:text-base text-sm leading-6 text-secondary">
                By creating a free account, you’ll have access to the following
                features:
              </h6>

              <div className="lg:mt-6 mt-4 flex flex-col gap-2 text-secondary">
                {cardImage.map(({ src, text }, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="rounded-full min-w-10 min-h-10 bg-[#F2F7F2] flex items-center justify-center">
                      <Image src={src} alt="icon" width={20} height={20} />
                    </div>
                    <p className="font-light lg:text-base text-sm leading-6 text-muted-foreground">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="lg:flex items-center justify-between w-full">
            <Image
              src="/assets/three-image.png"
              alt="Free to use"
              width={413}
              height={384}
            />
            <div className="lg:max-w-[43%] mt-5">
              <h4 className="font-semibold lg:text-2xl text-xl leading-10 text-secondary">
                Free to use
              </h4>
              <p className="lg:mt-6 mt-1 font-light lg:text-base text-sm leading-6 text-muted-foreground">
                <span className="text-secondary font-medium">
                  Therapy is completely confidential
                </span>{" "}
                and none of your information is distributed or shared, not even
                with your selected therapist. Only basic information you provide
                is saved, and you can edit your profile to remove your
                preferences at any time. View our{" "}
                <span className="text-primary font-medium">privacy policy</span>{" "}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
