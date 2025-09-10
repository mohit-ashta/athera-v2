import React from "react";
import { Banner } from "./components/common/home-layout/banner";
import ActionCard from "./components/common/home-layout/action-card";
import { StoryWall } from "./components/common/home-layout/story-wall";
import { DualCard } from "./components/common/home-layout/dual-card";

export const Homepage = () => {
  return (
    <>
      <Banner />
      <ActionCard />
      <StoryWall />
      <DualCard />
    </>
  );
};
