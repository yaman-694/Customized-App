export type option = {
  value: string;
  label: string;
};
export type ComponentSearch = {
  name: string;
  placeholder: string;
  ref: React.MutableRefObject<HTMLInputElement | null>;
};
export type DropDownType = {
  name: DropDownOptionType["type"];
  options: option[];
};

export type DropDownOptionType = {
  type: "role" | "city" | "company" | "country";
};