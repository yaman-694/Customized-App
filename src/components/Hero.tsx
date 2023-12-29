'use client';

import { JobProvider } from "@/contexts/jobContext";
import { FilterBoxProvider } from "../contexts/filterContext";
import Filter from "./filter/Filter";
import { JobCards } from "./jobs/JobCards";
import { TopGradients } from "./ui/Gradients";
import { Heading } from "./ui/Hero/Heading";
import { SubHeading } from "./ui/Hero/SubHeading";
import { useEffect, useState } from "react";
import { getKeys } from "@/services/jobService";
import { ComponentSearch, DropDownType, OptionsType } from "@/interfaces";
import { theme } from "@/app/client1/page";

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
    dropDown: [],
  });
  const countryKeysFunc = async () => {
    const countryKeys: OptionsType[] = await getKeys("country");
    const roleKeys: OptionsType[] = await getKeys("job_category");
    setFilterBoxComponents({
      ...filterBoxComponents,
      dropDown: [
        {
          name: "country",
          options: countryKeys,
        },
        {
          name: "role",
          options: roleKeys,
        },
      ],
    });
  };
  useEffect(() => {
    countryKeysFunc();
  }, []);
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <TopGradients />
        <div className="mx-auto max-w-5xl py-32 h-screen sm:py-48 lg:py-56">
          <FilterBoxProvider>
            <JobProvider>
              <div className="text-center">
                <Heading>Get Your First Job</Heading>
                <SubHeading>
                  Empower your career with a dynamic and collaborative work
                  environment.
                </SubHeading>
              </div>
              <Filter
                align={1}
                className={`${theme?.fonts?.body}`}
                components={{
                  search: filterBoxComponents.search,
                  dropDown: filterBoxComponents.dropDown,
                }}
                searchButtons={{
                  search: {
                    style: `${theme?.colors?.hoverButtonBg} ${theme?.colors?.buttonBg}`,
                  },
                }}
              />
              <JobCards
                clientId="client1"
                jobNameStyle={{
                  font: "text-2xl md:text-3xl",
                  fontWeight: "font-semibold",
                  fontColor: "text-black",
                  fontFamily: theme?.fonts?.heading,
                }}
                descriptionStyle={{
                  font: "text-base md:text-lg",
                  fontWeight: "font-normal",
                  fontColor: "text-gray-500",
                  fontFamily: theme?.fonts?.subHeading,
                }}
                badgeClassName={theme?.fonts?.body}
                applyButtonClassName={`${theme?.colors?.buttonBg} ${theme?.colors?.hoverButtonBg}`}
              />
            </JobProvider>
          </FilterBoxProvider>
        </div>
      </div>
    </div>
  );
}
