"use client";

import close from "@/../public/icons/close.svg";
import { useFilterContext } from "@/contexts/filterContext";
import { ButtonVariant, ComponentSearch, DropDownType } from "@/interfaces";
import { Button } from "../ui/Button";
import { DropDown } from "../ui/DropDown";
import Icon from "../ui/Icon";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Form } from "./Form";
import { cn } from "@/lib/utils";

const Buttons = ({
  dispatch,
  variant,
}: {
  variant?: ButtonVariant['type'];
  dispatch: React.Dispatch<{
    type: string;
    value?: string | string[];
  }>;
}) => {
  return (
    <div className="flex w-full md:w-[200px] justify-between">
      <Button
        variant={"wt_bg"}
        onClick={() => {
          dispatch({
            type: "RESET",
          });
        }}
      >
        Reset
      </Button>
      <Button variant={variant ? variant : "blue"} className={`w-full ${variant==='destructive' ? 'rounded-none': ''}`}>
        Search
      </Button>
    </div>
  );
};

export default function Filter({
  components,
  align,
  className,
  buttonVariant,
}: {
  className?: string;
  buttonVariant?: ButtonVariant["type"];
  align: 1 | 2;
  components: {
    search: ComponentSearch[];
    dropDown: DropDownType[];
  };
}) {
  const { state, dispatch } = useFilterContext();
  return (
    <div
      className={cn(
        "my-16 flex flex-col items-start rounded-lg border border-input p-2",
        className
      )}
    >
      {align === 1 && components.search.length === 1 && (
        <div className="flex flex-col items-start justify-between p-2 w-full gap-3 md:flex-row md:items-center">
          <Form search={components.search} />
          <div className="flex items-center flex-wrap gap-3 w-full justify-between">
            {components.dropDown.map((component: DropDownType) => (
              <DropDown
                key={component.name}
                type={component.name}
                options={component.options}
                className={cn(
                  "w-[130px] md:w-[200px] flex-1",
                  component.className
                )}
              />
            ))}
          </div>
          <Buttons dispatch={dispatch} variant={buttonVariant} />
        </div>
      )}
      {align === 2 && (
        <>
          <div className="flex w-full gap-2">
            <Form search={components.search} />
            <Buttons dispatch={dispatch} variant={buttonVariant} />
          </div>
          <Separator orientation="horizontal" />
          <div className="mt-2 flex justify-between gap-1 w-full md:gap-3 md:justify-start">
            {components.dropDown.map((component: DropDownType) => (
              <DropDown
                key={component.name}
                type={component.name}
                options={component.options}
                className={cn(
                  "w-[140px] md:w-[200px] flex-1",
                  component.className
                )}
              />
            ))}
          </div>
        </>
      )}
      <div className="px-2 flex flex-wrap gap-3">
        {Object.keys(state).map((key: string) => {
          // Use type assertion to tell TypeScript that the property exists
          if (key === "active") return null;
          interface FilterBox {
            active: boolean;
            [key: string]: string[] | string | boolean;
          }

          const values = (state as FilterBox)[key];

          // Check if the property is an array before mapping
          if (Array.isArray(values)) {
            return values.map((value: string, index: number) => (
              <Badge
                variant="round"
                className="cursor-pointer mt-2 text-sm hover:bg-slate-100 transition flex gap-1 items-center"
                key={index}
                onClick={() => {
                  dispatch({
                    type: `REMOVE_${key.toUpperCase()}`,
                    value: value as string,
                  });
                }}
              >
                <span>{value}</span>
                <Icon name="close" width="14" height="14" iconPath={close} />
              </Badge>
            ));
          }

          // If the property is not an array, render a single Badge
          if (values !== "") {
            return (
              <Badge
                variant="round"
                className="cursor-pointer mt-2 text-sm hover:bg-slate-100  transition"
                key={key}
                onClick={() => {
                  dispatch({
                    type: `REMOVE_${key.toUpperCase()}`,
                    value: values as string,
                  });
                }}
              >
                <span>{values}</span>
                <Icon name="close" width="14" height="14" iconPath={close} />
              </Badge>
            );
          }
        })}
      </div>
    </div>
  );
}
