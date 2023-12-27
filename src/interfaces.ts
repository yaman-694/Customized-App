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
    | null
    | undefined;
};

export type JobCardPropsType = {
  badgeClassName?: string;
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
};

export type JobDescriptionHeaderType = {
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
  buttonStyle?: {
    variant: ButtonVariant["type"];
    style?: string;
  };
  setOpen: any;
  formType: any;
  children: any;
};
