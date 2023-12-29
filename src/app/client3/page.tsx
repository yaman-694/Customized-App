import Hero from "@/components/Hero3";
import React from "react";

export const theme = {
  colors: {
    text: 'text-rose-500',
    buttonBg: 'bg-rose-500',
    hoverButtonBg: 'hover:bg-rose-600',
    groupHoverBg: 'group-hover:bg-rose-500',
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


