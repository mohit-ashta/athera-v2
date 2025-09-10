import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";

interface homeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<homeLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
