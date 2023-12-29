export type HeroProps = {
  theme?: {
    colors?: {
      primary?: string;
      secondary?: string;
      primaryForeground?: string;
    };
    fonts?: {
      body?: string;
      heading?: string;
      subHeading?: string;
    };
  };
};

export type option = {
  value: string;
  label: string;
};
export type ComponentSearch = {
  name: string;
  placeholder: string;
};
export type DropDownType = {
  name: DropDownOptionType["type"];
  options: option[];
  className?: string;
};

export type DropDownOptionType = {
  type: "role" | "city" | "company" | "country";
};

export type ButtonVariant = {
  type:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "outline_search"
    | "ghost"
    | "blue"
    | "wt_bg"
    | "outline_dark"
    | null
    | undefined;
};

export type JobCardPropsType = {
  applyButtonClassName?: string;
  badgeClassName?: string;
  children?: any;
  className?: string;
  jobName: {
    name: string;
    font?: string;
    fontWeight?: string;
    fontColor?: string;
    fontFamily?: string;
  };
  jobDescription: {
    description: string;
    font?: string;
    fontWeight?: string;
    fontColor?: string;
    fontFamily?: string;
  };
};

export type JobCardsPropsType = {
  jobCardType?: string;
  badgeClassName?: string;
  clientId: string;
  className?: string;
  jobNameStyle?: {
    font?: string;
    fontWeight?: string;
    fontColor?: string;
    fontFamily?: string;
  };
  descriptionStyle?: {
    font?: string;
    fontWeight?: string;
    fontColor?: string;
    fontFamily?: string;
  };
  display?: string;
  applyButtonClassName?: string;
};

export type DescriptionApplyButtonProps = {
  buttonStyle?: {
    variant: ButtonVariant["type"];
    style?: string;
  };
  setOpen: any;
  formType: any;
};

export interface JobDescriptionHeaderType extends DescriptionApplyButtonProps {
  name: {
    name: string;
    font?: string;
    fontWeight?: string;
    fontColor?: string;
    fontFamily?: string;
    style?: string;
  };
  company: {
    name: string;
    style?: string;
  };
  children?: any;
  buttonPosition?: "down" | "left"; // set position of button
  goBackButton?: {
    variant: ButtonVariant["type"];
    style?: string;
  };
}
