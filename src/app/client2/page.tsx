import Hero from "@/components/Hero2";
import { HeroProps } from "@/interfaces";
import React from "react";

export const theme: HeroProps = {
  colors: {
    text: 'text-cyan-500',
    buttonBg: 'bg-cyan-500',
    hoverButtonBg: 'hover:bg-cyan-600',
    groupHoverBg: 'group-hover:bg-cyan-500',
    hoverText: 'group-hover:text-white',
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


