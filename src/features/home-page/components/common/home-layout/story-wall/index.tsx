"use client"
import { Button } from "@/components/ui/button";
import { stories } from "./constant";
import { useRouter } from "next/navigation";

export const StoryWall = () => {
  const router = useRouter();
  return (
    <div className="lg:mt-[94px] mt-14">
      <div className="text-accent container rounded-2xl !bg-[url('/assets/story-wall.png')]  bg-cover bg-center h-full w-full">
        <div className="lg:py-10 pt-5 pb-10 lg:px-[66px] px-4">
          <div className="text-center mb-10">
            <h2 className="font-semibold lg:text-[40px] text-3xl leading-14">
              The Story Wall
            </h2>
            <p className="lg:text-base text-sm font-medium leading-6">
              Real Stories, Real Comments
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 font-inter relative">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-card-foreground text-secondary p-6 rounded-md break-inside-avoid inline-block w-full"
              >
                <p className="text-base font-extralight leading-6">
                  {story.content}
                </p>
                <div className="mt-4 text-xs font-medium leading-5">
                  - {story.author}
                </div>
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-b to-[#00301C] from-[#00301C00]"></div>
          </div>

          <div className="text-center mt-8">
            <Button
              variant={"secondary"}
              size={"default"}
              onClick={() => router.push("/story-wall")}
            >
              Read More Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
