"use client";

import { JobProvider } from "@/contexts/jobContext";
import { FilterBoxProvider } from "../contexts/filterContext";
import Filter from "./Filter";
import { JobCards } from "./JobCards";
import { TopGradients } from "./ui/Gradients";
import { Heading } from "./ui/Hero/Heading";
import { SubHeading } from "./ui/Hero/SubHeading";

export default function Hero() {
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
                  ],
                }}
              />
              <JobCards />
            </JobProvider>
          </FilterBoxProvider>
        </div>
      </div>
    </div>
  );
}
