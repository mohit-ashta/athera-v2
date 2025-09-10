import React from "react";
import { cards } from "./constant";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  linkText: string;
}

const Card: React.FC<CardProps> = ({ title, description, linkText }) => {
  return (
    <div className="p-8 rounded-[15px] backdrop-blur-lg bg-white/5 border border-primary shadow-lg">
      <Image src={"/assets/phool.png"} alt="leaf" width={32} height={32} />

      <h3 className="lg:text-2xl text-xl font-semibold leading-8 text-accent lg:mt-10 mt-4">
        {title}
      </h3>
      <p className="lg:text-base text-sm font-light leading-6 lg:mb-10 mb-4 mt-2 text-accent font-inter">
        {description}
      </p>
      <Link href="#" className="text-primary font-medium text-base leading-6">
        {linkText}
      </Link>
    </div>
  );
};

const ActionCard: React.FC = () => {
  return (
    <div className="bg-blend-multiply !bg-black/60 bg-[url('/assets/card-banner.webp')] py-16 px-4 lg:px-0">
      <div className="grid lg:grid-cols-3 gap-4 container opacity-100">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ActionCard;
