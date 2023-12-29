"use client";
import React from "react";
import heroImg from "@/../public/hero/hero.svg";
import { theme } from "@/app/client2/page";
import { JobProvider } from "@/contexts/jobContext";
import { cn } from "@/lib/utils";
import { FilterBoxProvider } from "../contexts/filterContext";
import Filter from "./filter/Filter";
import { JobCards } from "./jobs/JobCards";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Hero/Heading";
import { SubHeading } from "./ui/Hero/SubHeading";
import Icon from "./ui/Icon";
import { ComponentSearch, DropDownType } from "@/interfaces";
import { getKeys } from "@/services/jobService";
import { useEffect, useState } from "react";

type OptionsType = {
  value: string;
  label: string;
};

export default function Hero() {
  const [filterBoxComponents, setFilterBoxComponents] = useState<{
    search: ComponentSearch[];
    dropDown: DropDownType[];
  }>({
    search: [
      {
        name: "job_name",
        placeholder: "Job Name",
      },
    ],
    dropDown: [
      {
        name: "country",
        className: "border-2 rounded-none",
        options: [
          {
            value: "Mexico",
            label: "Mexico",
          },
          {
            value: "Denmark",
            label: "Denmark",
          },
          {
            value: "Japan",
            label: "Japan",
          },
          {
            value: "France",
            label: "France",
          },
        ],
      },
      {
        name: "city",
        className: "border-2 rounded-none",
        options: [
          {
            value: "Oaxaca",
            label: "Oaxaca",
          },
          {
            value: "Skive",
            label: "Skive",
          },
          {
            value: "Paris",
            label: "Paris",
          },
          {
            value: "Tokyo",
            label: "Tokyo",
          },
        ],
      },
      {
        name: "role",
        className: "border-2 rounded-none",
        options: [
          {
            value: "Mexico",
            label: "Mexico",
          },
          {
            value: "Denmark",
            label: "Denmark",
          },
          {
            value: "Japan",
            label: "Japan",
          },
          {
            value: "France",
            label: "France",
          },
        ],
      },
    ],
  });
  // const filterBoxComponents: {

  // } =;
  useEffect(() => {
    const countryKeysFunc = async () => {
      const countryKeys: OptionsType[] = await getKeys("country");
      const cityKeys: OptionsType[] = await getKeys("city");
      const roleKeys: OptionsType[] = await getKeys("job_category");
      console.log(countryKeys, cityKeys, roleKeys);
      // setFilterBoxComponents({
      //   search: filterBoxComponents.search,
      //   dropDown: [
      //     {
      //       name: "country",
      //       className: "border-2 rounded-none",
      //       options: countryKeys,
      //     },
      //     {
      //       name: "city",
      //       className: "border-2 rounded-none",
      //       options: cityKeys,
      //     },
      //     {
      //       name: "role",
      //       className: "border-2 rounded-none",
      //       options: roleKeys,
      //     },
      //   ],
      // });
      // filterBoxComponents.dropDown[0].options = countryKeys;
      // filterBoxComponents.dropDown[1].options = cityKeys;
      // filterBoxComponents.dropDown[2].options = roleKeys;
    };
    countryKeysFunc();
  }, [filterBoxComponents]);

  // const colors = {
  //   text: `text-${theme?.colors?.primary}`,
  //   bg: `bg-${theme?.colors?.primary}`,
  //   hoverButtonBg: `hover:bg-${theme?.colors?.hoverPrimary}`,
  //   grouphoverButtonBg: theme?.colors?.groupHoverPrimary,
  // }
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-5xl ">
          <FilterBoxProvider>
            <JobProvider>
              <div className="flex flex-col gap-3 md:flex-row md:items-center my-36">
                <div className="text-left">
                  <Heading className={theme?.fonts?.heading}>
                    Join Your new{" "}
                    <span className={theme?.colors?.text}>Company</span>
                  </Heading>
                  <SubHeading className={theme?.fonts?.body}>
                    Empower your career with a dynamic and collaborative work
                    environment.
                  </SubHeading>
                  <Button
                    variant={"destructive"}
                    className={cn(
                      `mt-5 font-semibold px-4 py-4 text-md md:px-6 md:py-6 md:text-lg rounded-full tracking-wide font-mono uppercase bg-rose-500 ${theme?.colors?.buttonBg} ${theme?.colors?.hoverButtonBg}`,
                      theme?.fonts?.body
                    )}
                    onClick={() => {
                      const filterBox = document.getElementById("filter");
                      if (filterBox)
                        filterBox.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                  >
                    Get Started
                  </Button>
                </div>
                <Icon
                  iconPath={heroImg}
                  width="500"
                  height="500"
                  name="hero"
                ></Icon>
              </div>
              <Filter
                // style of the filter box
                className={`border-none ${theme?.fonts?.body} text-lg`}
                badgeStyle={{
                  // parent div style
                  parent: {
                    style: "p-0 mt-1",
                  },
                  // badge style
                  child: {
                    variant: "secondary",
                    style: "bg-slate-200 text-slate-700 rounded-none",
                  },
                }}
                // layout of the filter box
                align={2}
                searchButtons={{
                  search: {
                    variant: "destructive",
                    style: `rounded-none ${theme?.colors?.hoverButtonBg} ${theme?.colors?.buttonBg}`,
                  },
                }}
                components={{
                  search: filterBoxComponents.search,
                  dropDown: filterBoxComponents.dropDown,
                }}
              />
              <JobCards
                jobCardType="JobCard2"
                // display="flex-row w-full"
                // className="flex flex-col"
                // applyButtonClassName='self-start'
                display="flex-row"
                applyButtonClassName={`${theme?.colors?.groupHoverBg} ${theme?.colors?.hoverText}`}
                className="grid grid-cols-1 gap-x-4 md:grid-cols-2"
                jobNameStyle={{
                  font: "text-2xl md:text-3xl",
                  fontWeight: "font-bold",
                  fontColor: "text-black",
                  fontFamily: theme?.fonts?.heading,
                }}
                descriptionStyle={{
                  font: "text-sm md:text-lg",
                  fontWeight: "font-normal",
                  fontColor: "text-gray-900",
                  fontFamily: theme?.fonts?.subHeading,
                }}
                badgeClassName={theme?.fonts?.body}
                clientId="client2"
              />
            </JobProvider>
          </FilterBoxProvider>
        </div>
      </div>
    </div>
  );
}
