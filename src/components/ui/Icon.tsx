import { cn } from "@/lib/utils";

export interface IconProps {
  name: string; // This could be the name or identifier of the icon
  className?: string;
  iconPath: string;
}



const Icon: React.FC<IconProps> = ({ iconPath, name, className }) => {
  return (
    <img
      className={cn("inline-block", className)}
      src={iconPath}
      alt={name} // You might want to provide an appropriate alt text
      width="24"
      height="24"
    />
  );
};

export default Icon;
