import { cn } from "@/lib/utils";
import Image from "next/image";

export interface IconProps {
  name: string; // This could be the name or identifier of the icon
  className?: string;
  iconPath: string;
  width: string;
  height: string;
}



const Icon: React.FC<IconProps> = ({ iconPath, name, width, height, className }) => {
  return (

    // ...

    <Image
      className={cn("inline-block", className)}
      src={iconPath}
      alt={name} // You might want to provide an appropriate alt text
      width={Number(width)}
      height={Number(height)}
    />
  );
};

export default Icon;
