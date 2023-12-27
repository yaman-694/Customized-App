import applyIcon from "@/../public/icons/apply.svg";
import Icon from "@/components/ui/Icon";
import { JobCardPropsType } from "@/interfaces";
import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "../../ui/Badge";
import { Button } from "../../ui/Button";
import ApplyArrow from "@/components/Svg/ApplyArrow";

const JobCard2 = React.forwardRef<HTMLDivElement, JobCardPropsType>(
  ({ className, jobName, jobDescription, badgeClassName, ...props }, ref) => {
    return (
      <div
        className={cn(
          "group bg-white flex w-full h-full flex-col items-stretch px-11 py-5 md:py-10 max-md:max-w-full max-md:px-5 border-2 border-gray-900 rounded-none hover:shadow-black_drop md:hover:shadow-black_drop_md transistion-all duration-300",
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "flex justify-between flex-wrap gap-5 px-px max-md:max-w-full max-md:flex-wrap",
            className
          )}
        >
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
                    className={cn(
                      "justify-center text-black text-center text-[10px] md:text-xs whitespace-nowrap rounded-full items-stretch px-2.5 py-[5px] border-[2px] border-solid border-black"
                    , badgeClassName)}
                    variant={"round"}
                  >
                    {item}
                  </Badge>
                )
              )}
            </div>
          </div>
          <div className="hidden md:flex">
            <Button
              variant={"wt_bg"}
              className="font-bold text-md self-end rounded-none group-hover:bg-rose-500 group-hover:text-white transistion-all duration-300"
            >
              Apply Now
              <ApplyArrow />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

JobCard2.displayName = "JobCard2";

export { JobCard2 };
