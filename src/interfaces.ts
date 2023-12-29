import React from "react";

export type HeroProps = {
  colors?: {
    text?: string;
    buttonBg?: string;
    hoverButtonBg?: string;
    groupHoverBg?: string;
    hoverText?: string;
  };
  fonts?: {
    body?: string;
    heading?: string;
    subHeading?: string;
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
  jobKeys?: {
    jobCategory?: string;
    jobType?: string;
    jobCity?: string;
    customField?: string;
  };
  badgeClassName?: string;
  children?: React.ReactNode;
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
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formType: 'default' | 'fixed';
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
  children?: React.ReactNode;
  buttonPosition?: "down" | "left"; // set position of button
  goBackButton?: {
    variant: ButtonVariant["type"];
    style?: string;
  };
}


export type SearchButtonsType = {
  reset?: {
    variant?: ButtonVariant["type"];
    style?: string;
  };
  search?: {
    variant?: ButtonVariant["type"];
    style?: string;
  };
};

export type FilterPropsType = {
  className?: string;
  searchButtons?: SearchButtonsType;
  buttonVariant?: ButtonVariant["type"];
  align: 1 | 2;
  components: {
    search: ComponentSearch[];
    dropDown: DropDownType[];
  };
  badgeStyle?: {
    parent?: {
      style: string;
    };
    child?: {
      variant:
        | "round"
        | "secondary"
        | "outline"
        | "destructive"
        | "default"
        | null
        | undefined;
      style?: string;
    };
  };
};

export type OptionsType = {
  value: string;
  label: string;
};