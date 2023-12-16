"use client";
import { JobProvider } from "@/contexts/jobContext";
import { useRef } from "react";
import { FilterBoxProvider } from "../contexts/filterContext";
import Filter from "./Filter";
import { JobCards } from "./JobCards";
import { TopGradients } from "./ui/Gradients";
import { Heading } from "./ui/Hero/Heading";
import { SubHeading } from "./ui/Hero/SubHeading";

export default function Hero() {
  const search1 = useRef(null);
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <TopGradients />
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56]]]">
          <div className="text-center">
            <Heading>Get Your First Job</Heading>
            <SubHeading>
              Empower your career with a dynamic and collaborative work
              environment.
            </SubHeading>
            <FilterBoxProvider>
              <JobProvider>
                <Filter
                  align={1}
                  components={{
                    search: [
                      {
                        name: "job_name",
                        placeholder: "Job Name",
                        ref: search1,
                      },
                    ],
                    dropDown: [
                      {
                        name: "country",
                        options: [
                          {
                            value: "mexico",
                            label: "Mexico",
                          },
                          {
                            value: "menmark",
                            label: "Denmark",
                          },
                          {
                            value: "mapan",
                            label: "Japan",
                          },
                          {
                            value: "france",
                            label: "France",
                          }
                        ],
                      },
                      {
                        name: "city",
                        options: [
                          {
                            value: "oaxaca",
                            label: "Oaxaca",
                          },
                          {
                            value: "skive",
                            label: "Skive",
                          },
                          {
                            value: "paris",
                            label: "Paris",
                          },
                          {
                            value: "tokyo",
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
    </div>
  );
}
