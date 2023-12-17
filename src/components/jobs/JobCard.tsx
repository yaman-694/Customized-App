import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/Button";
import { Separator } from "../ui/separator";

const JobCardVariants = cva(
    "bg-white flex w-full flex-col items-stretch px-11 py-10 rounded-lg max-md:max-w-full max-md:my-10 max-md:px-5",
    {
        variants: {
            variant: {
                default: "border border-input border-gray-200",
                border: "border-2 border-input border-gray-900",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface JobCardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof JobCardVariants> {}

type Props = {
    jobName: {
        name: string;
        font: string;
        fontWeight: string;
        fontColor: string;
        fontFamily?: string;
    };
    jobDescription: {
        description: string;
        font: string;
        fontWeight: string;
        fontColor: string;
        fontFamily?: string;
    };
};

const JobCard = React.forwardRef<HTMLDivElement, JobCardProps & Props>(
    ({ className, variant, jobName, jobDescription, ...props }, ref) => {
        return (
            <div
                className={cn(JobCardVariants({ variant, className }))}
                ref={ref}
                {...props}
            >
                <div className="flex items-stretch justify-between gap-5 px-px max-md:max-w-full max-md:flex-wrap">
                    <div className="flex flex-col items-stretch">
                        <header
                            className={`${jobName.fontFamily} text-left justify-center ${jobName.fontColor} ${jobName.font} ${jobName.fontWeight}`}
                        >
                            {jobName.name}
                        </header>
                        <div className="flex items-stretch gap-3 mt-3 pr-20 max-md:pr-5">
                            {Array.from([
                                "Engineering",
                                "London, UK",
                                "Remote",
                            ]).map((item, index) => (
                                <Badge
                                    key={index}
                                    className="justify-center text-black text-center text-xs whitespace-nowrap rounded items-stretch px-2.5 py-[5px] border-[1px] border-solid border-black"
                                    variant={"round"}
                                >
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-stretch">
                        <Button variant={"blue"}>Apply Now</Button>
                    </div>
                </div>
                {jobDescription && (
                    <>
                        <Separator orientation="horizontal" className="mt-5" />
                        <div className="text-left text-gray-500 text-base font-medium mt-5 max-md:max-w-full">
                            {jobDescription}
                        </div>
                    </>
                )}
            </div>
        );
    }
);

JobCard.displayName = "JobCard";

export { JobCard };
