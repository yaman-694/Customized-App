"use server";
import heroImg from "@/../public/hero/hero.svg";
import { JobProvider } from "@/contexts/jobContext";
import { FilterBoxProvider } from "../contexts/filterContext";
import Filter from "./filter/Filter";
import { JobCards } from "./jobs/JobCards";
import { Heading } from "./ui/Hero/Heading";
import { SubHeading } from "./ui/Hero/SubHeading";
import Icon from "./ui/Icon";
import Image from "next/image";

export default async function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-5xl ">
          <FilterBoxProvider>
            <JobProvider>
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <div className="text-left">
                  <Heading className="font-serif">
                    Join Your new <span className="text-rose-500">Company</span>
                  </Heading>
                  <SubHeading className="font-mono">
                    Empower your career with a dynamic and collaborative work
                    environment.
                  </SubHeading>
                </div>
                  <Icon
                    iconPath={heroImg}
                    width="500"
                    height="500"
                    name="hero"
                  ></Icon>
              </div>
              <Filter
                align={2}
                className="border-none"
                buttonVariant="destructive"
                components={{
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
                  ],
                }}
              />
              <JobCards
                display="flex-row"
                jobCardType="JobCard2"
                className="grid grid-cols-1 gap-x-4 md:grid-cols-2"
                jobNameStyle={{
                  font: "text-2xl md:text-3xl",
                  fontWeight: "font-bold",
                  fontColor: "text-black",
                  fontFamily: "font-serif",
                }}
                descriptionStyle={{
                  font: "text-sm md:text-lg",
                  fontWeight: "font-normal",
                  fontColor: "text-gray-900",
                  fontFamily: "font-sans2",
                }}
                clientId="client2"
              />
            </JobProvider>
          </FilterBoxProvider>
        </div>
      </div>
    </div>
  );
}
