import applyIcon from "@/../public/icons/apply.svg";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/Button";
import { JobCardPropsType } from "@/interfaces";



const JobCard2 = React.forwardRef<HTMLDivElement, JobCardPropsType>(
  ({ className, jobName, jobDescription, ...props }, ref) => {
    return (
      <div
        className={cn(
          "bg-white flex w-full flex-col items-stretch px-11 py-5 md:py-10 max-md:max-w-full max-md:px-5 border-2 border-gray-900 rounded-none",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="flex justify-between gap-5 px-px max-md:max-w-full max-md:flex-wrap">
          <div className="flex flex-col items-stretch">
            <header
              className={`${jobName.fontFamily} text-left justify-center ${jobName.fontColor} ${jobName.font} ${jobName.fontWeight}`}
            >
              {jobName.name}
            </header>
            {jobDescription?.description !== "None" ? (
              <>
                <div
                  className={`text-left ${jobDescription.font} ${jobDescription.fontColor} text-base ${jobDescription.fontWeight} ${jobDescription.fontFamily} mt-5 max-md:max-w-full pr-2`}
                >
                  {jobDescription.description}
                </div>
              </>
            ) : null}
            <div className="flex items-stretch gap-3 mt-3 pr-20 max-md:pr-5">
              {Array.from(["Engineering", "London, UK", "Remote"]).map(
                (item, index) => (
                  <Badge
                    key={index}
                    className="justify-center text-black text-center text-[10px] md:text-xs whitespace-nowrap rounded-full items-stretch px-2.5 py-[5px] border-[2px] border-solid border-black"
                    variant={"round"}
                  >
                    {item}
                  </Badge>
                )
              )}
            </div>
          </div>
          <div className="hidden md:flex">
            <Button variant={"wt_bg"} className="font-bold text-md">
              Apply Now
              <Icon
                iconPath={applyIcon}
                width="18"
                height="18"
                name="apply"
                className="ml-1"
              />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

JobCard2.displayName = "JobCard2";

export { JobCard2 };
