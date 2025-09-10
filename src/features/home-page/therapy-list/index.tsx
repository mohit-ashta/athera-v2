"use client";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "@/lib/icons/filter-icon";
import { Dropdown } from "./common/dropdown";
import { X } from "lucide-react";
import { TherapistCard, PlaceholderCard } from "./common/therapist-card";
import { resourcesData,videoData } from "./constant";
import { useTherapy } from "@/api/therapy";
import { useState } from "react";

type Option = {
  value: string;
  label: string;
};

export const TherapyListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const Options: Option[] = [{ value: "doctor", label: "doctor" }];
  const limit = 20;

  const { data, isLoading, isError } = useTherapy(currentPage, limit);
  // console.log(data[0]?.name,"data")

  return (
    <section>
      <div className="container pt-6 pb-7 flex lg:flex-row flex-col gap-4 justify-between lg:items-center lg:px-0 px-4">
        <div className="flex lg:flex-row flex-col gap-4 lg:items-center w-full lg:px-0 px-4">
          <Button className="p-2 flex gap-2 h-9">
            filters
            <FilterIcon className="fill-accent" />
          </Button>

          <div className="flex lg:flex-row flex-col gap-2 items-center w-full">
            <Dropdown options={Options} placeholder="Concerns" />
            <Dropdown options={Options} placeholder="Designation" />
            <Dropdown options={Options} placeholder="Type of Therapy" />
            <Dropdown options={Options} placeholder="Price range" />
            <Button variant={"ghost"} size={"sm"}>
              Clear all <X size={22} />
            </Button>
          </div>
        </div>
        <Button>Narrow my search</Button>
      </div>
      <hr />
      <div className="container px-4 lg:px-0">
        <div className="text-secondary container py-10">
          <h3 className="font-medium lg:text-[32px] text-2xl leading-10">
            Individual Therapy
          </h3>
          <h5 className="mt-4 font-normal text-base leading-6">
            <span className="font-bold">8</span> matches found for you
          </h5>
          <div className="mt-4 grid lg:lg:grid-cols-4 gap-6">
            
            {/* {data?.slice(0, 3).map((therapist: any, index: any) => (
              <TherapistCard key={index} {...therapist} />
            ))} */}
            <PlaceholderCard
              name={"View 5 more"}
              fontWeight="font-normal"
              height="lg:h-full h-[220px]"
            />
          </div>
        </div>
        <hr />
        <div className="text-secondary container py-10">
          <h3 className="font-medium lg:text-[32px] text-2xl leading-10">
            Life Coaching
          </h3>
          <h5 className="mt-4 font-normal text-base leading-6">
            <span className="font-bold">8</span> matches found for you
          </h5>
          {/* <div className="mt-4 grid lg:grid-cols-4 gap-6">
            {therapistsData.map((therapist, index) => (
              <TherapistCard key={index} {...therapist} />
            ))}
            <PlaceholderCard
              name={"View 5 more"}
              fontWeight="font-normal"
              height="lg:h-full h-[220px]"
            />
          </div> */}
        </div>
        <hr />
        <div className="text-secondary container py-10">
          <h3 className="font-medium lg:text-[32px] text-2xl  leading-10">
            Videos
          </h3>
          <h5 className="mt-4 font-normal text-base leading-6">
            <span className="font-bold">8</span> matches found for you
          </h5>

          <div className="mt-4 grid lg:grid-cols-4 gap-6">
            {videoData.map((vid, index) => (
              <PlaceholderCard key={index} name={vid.name} />
            ))}
            <PlaceholderCard
              name={"View 5 more"}
              fontWeight="font-normal"
              height="lg:h-full h-[220px]"
            />
          </div>
        </div>
        <hr />
        <div className="text-secondary container py-10">
          <h3 className="font-medium lg:text-[32px] text-2xl leading-10">
            Online Resources
          </h3>
          <h5 className="mt-4 font-normal text-base leading-6">
            <span className="font-bold">8</span> matches found for you
          </h5>

          <div className="mt-4 grid lg:grid-cols-4 gap-6">
            {resourcesData.map((res, index) => (
              <PlaceholderCard key={index} name={res.name} />
            ))}
            <PlaceholderCard
              name={"View 5 more"}
              fontWeight="font-normal"
              height="lg:h-full h-[220px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
