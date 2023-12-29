import Hero from "@/components/Hero3";
import { HeroProps } from "@/interfaces";
import React from "react";

export const theme: HeroProps = {
  colors: {
    text: "text-teal-500",
    buttonBg: "bg-teal-500",
    hoverButtonBg: "hover:bg-teal-600",
    groupHoverBg: "group-hover:bg-teal-500",
    hoverText: "group-hover:text-white",
  },
  fonts: {
    heading: "font-serif",
    subHeading: "font-sans2",
    body: "font-mono",
  },
};
export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}


