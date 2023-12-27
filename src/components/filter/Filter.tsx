"use client";
import { useInView } from "react-intersection-observer";

import close from "@/../public/icons/close.svg";
import { useFilterContext } from "@/contexts/filterContext";
import { ButtonVariant, ComponentSearch, DropDownType } from "@/interfaces";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { DropDown } from "../ui/DropDown";
import Icon from "../ui/Icon";
import { Separator } from "../ui/Separator";
import { Form } from "./Form";
import { use, useEffect } from "react";

const Buttons = ({
  dispatch,
  variant,
}: {
  variant?: ButtonVariant["type"];
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
      <Button
        variant={variant ? variant : "blue"}

        className={`w-full ${variant === "destructive" ? "rounded-none" : ""}`}
      >
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
  badgeStyle,
}: {
  className?: string;
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
}) {
  const { ref, inView } = useInView();
  const { state, dispatch } = useFilterContext();

  return (
    <div
      ref={ref}
      id="filter"
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
          <div className="flex w-full gap-2 mb-3">
            <Form search={components.search} />
            <Buttons dispatch={dispatch} variant={buttonVariant} />
          </div>
          <Separator orientation="horizontal" />
          <div className="mt-4 flex flex-wrap justify-between gap-1 w-full md:gap-3 md:justify-start">
            {components.dropDown.map((component: DropDownType) => (
              <DropDown
                key={component.name}
                type={component.name}
                options={component.options}
                className={cn(
                  "w-[140px] md:w-[200px] flex-1 font-semibold",
                  component.className
                )}
                fontStyle="font-mono"
              />
            ))}
          </div>
        </>
      )}
      <div className={cn("px-2 flex flex-wrap gap-3", badgeStyle?.parent?.style)}>
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
                variant={badgeStyle?.child?.variant || "round"}
                className={cn(
                  "cursor-pointer mt-2 text-sm hover:bg-slate-100  transition",
                  badgeStyle?.child?.style
                )}
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
                variant={badgeStyle?.child?.variant || "round"}
                className={cn(
                  "cursor-pointer mt-2 text-sm hover:bg-slate-100  transition",
                  badgeStyle?.child?.style
                )}
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
