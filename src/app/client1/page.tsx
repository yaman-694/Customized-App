import Hero from "@/components/Hero";
import { HeroProps } from "@/interfaces";

export const theme: HeroProps = {
  colors: {
    text: "text-indigo-600",
    buttonBg: "bg-indigo-600",
    hoverButtonBg: "hover:bg-indigo-700",
    hoverText: "group-hover:text-white",
  },
  // fonts: {
  //   heading: "font-serif",
  //   subHeading: "font-sans2",
  //   body: "font-mono",
  // },
};
export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
