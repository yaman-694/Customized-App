import { cn } from "@/lib/utils";

export interface IconProps {
  name: string; // This could be the name or identifier of the icon
  className?: string;
  iconPath: string;
  width?: string;
  height?: string;
}



const Icon: React.FC<IconProps> = ({ iconPath, name, width, height, className }) => {
  return (
    <img
      className={cn("inline-block", className)}
      src={iconPath}
      alt={name} // You might want to provide an appropriate alt text
      width={width || "24"}
      height={height || "24"}
    />
  );
};

export default Icon;
