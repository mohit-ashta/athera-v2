"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import CommentsList from "./components/comment-card";
import { Stories, commentsData } from "./constant";

export const StoryWallPage = () => {
  const [activeTab, setActiveTab] = useState<"community" | "your">("community");

  return (
    <div className="bg-primary-foreground pb-[33px]">
      <div className="max-w-[746px] mx-auto p-4 lg:p-0">
        <h3 className="lg;text-5xl text-xl font-semibold leading-16 text-accent">
          The Story Wall
        </h3>
        <p className="font-light lg:text-base text-sm leading-6 lg:mt-2 font-inter">
          Read stories from your peers and share yours with the growing
          community.
        </p>
      </div>

      <div className="!bg-[url('/assets/mask-line.png')] bg-cover bg-center bg-no-repeat">
        <div className="lg:pt-[60px] pt-5 max-w-[746px] px-4 lg:px-0 mx-auto font-inter">
          <div className="flex lg:flex-row flex-col gap-5 justify-between items-center">
            <div className="flex lg:gap-10 gap-4 items-center">
              <h4
                className={`lg:text-lg  text-md leading-6 cursor-pointer ${
                  activeTab === "community" ? "font-bold " : "font-normal"
                }`}
                onClick={() => setActiveTab("community")}
              >
                Community Stories
              </h4>
              <h4
                className={`lg:text-lg text-md leading-6 cursor-pointer ${
                  activeTab === "your" ? "font-bold" : "font-normal"
                }`}
                onClick={() => setActiveTab("your")}
              >
                Your Stories
              </h4>
            </div>

            <Button size={"default"} variant={"default"} className="w-[280px]">
              Add Your Story
            </Button>
          </div>

          {activeTab === "community" ? (
            <CommentsList comments={commentsData} />
          ) : (
            <CommentsList comments={Stories} />
          )}
        </div>
      </div>
    </div>
  );
};
