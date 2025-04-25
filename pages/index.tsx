import React from "react";
import HeroHeadline from "../components/landing/HeroHeadline";
import Subheadline from "../components/landing/Subheadline";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF8] px-4 text-center">
      <HeroHeadline />
      <Subheadline />
    </div>
  );
}
