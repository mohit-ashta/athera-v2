"use client";
import Image from "next/image";
import { Star, Dot } from "lucide-react";
import { cn } from "@/lib/utils";

type TherapistCardProps = {
  imageSrc?: string;
  matchPercentage: number;
  name: string;
  price: number;
  about: string;
  specialties: string[];
  languages: string[];
  finances: any[];
};

const TherapistCard: React.FC<TherapistCardProps> = ({
  imageSrc,
  matchPercentage,
  name,
  finances,
  about,
  specialties,
  languages,
}) => {
  return (
    <div className="border rounded-[10px] bg-card-foreground p-1 shadow-md">
      <div className="p-1 bg-accent rounded">
        <div className="flex gap-[11px]">
          <div className="w-[100px] h-[146px]">
            {/* <Image
              src={imageSrc}
              alt={name}
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-center rounded"
            /> */}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h5 className="text-accent bg-secondary-foreground font-bold text-[10px] py-0.5 px-1 rounded">
                {matchPercentage}% MATCH
              </h5>
              <span>
                <Star className="fill-accent text-primary" />
              </span>
            </div>
            <div>
              <h4 className="font-semibold lg:text-xl text-lg lg:leading-7 leading-7 py-1 text-secondary-foreground">
                {name}
              </h4>
              <h6 className="lg:text-base text-sm font-semibold leading-4 text-primary mb-1">
                {finances.length > 0 ? (
                  finances.map((finac, id) => (
                    <li
                      key={id}
                      className="flex items-center text-[10px] line-clamp-1"
                    >
                      ${finac?.value ?? "N/A"} / {finac?.key ?? "N/A"}
                    </li>
                  ))
                ) : (
                  <li className="flex items-center text-[10px] line-clamp-1">
                    N/A
                  </li>
                )}
              </h6>
              <p className="font-normal text-accent-foreground text-[10px] line-clamp-2">
                {about}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[3px] pt-1.5 px-2 pb-[17px]">
        <div className="flex items-center gap-0.5">
          <label className="text-primary-foreground font-bold text-[10px] leading-4">
            Specialties:
          </label>
          <span className="text-primary-foreground font-normal text-[10px] leading-4 items-center line-clamp-1">
            {specialties.join(` • `)}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <label className="text-primary-foreground font-bold text-[10px] leading-4">
            Languages:
          </label>
          <ul className="flex gap-0.5 text-primary-foreground font-normal text-[10px] leading-4 items-center">
            <li className="flex items-center  text-[10px] line-clamp-1">
              {languages.join(` • `) || "N/A"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

type PlaceholderCardProps = {
  name: string;
  height?: string;
  fontWeight?: string;
};

const PlaceholderCard: React.FC<PlaceholderCardProps> = ({
  name,
  height = "h-[220px]",
  fontWeight = "font-bold",
}) => {
  return (
    <div
      className={cn("border rounded-[10px] bg-card-foreground p-1 shadow-md", height)}
    >
      <div className="p-1 bg-accent rounded-[10px] h-full flex justify-center items-center">
        <h4
          className={cn(
            "text-base leading-6 text-secondary-foreground underline decoration-solid",
            fontWeight
          )}
        >
          {name}
        </h4>
      </div>
    </div>
  );
};

export { PlaceholderCard, TherapistCard };
