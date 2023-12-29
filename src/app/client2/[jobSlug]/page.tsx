"use client";

import BackArrow from "@/components/Svg/BackArrow";
import { ApplicationForm } from "@/components/jobs/ApplicationForm";
import JobDescContent from "@/components/jobs/JobDescContent";
import JobDescription from "@/components/jobs/JobDescription";
import JobHeader from "@/components/jobs/JobHeader";
import { Button } from "@/components/ui/Button";
import { getJobBySlug } from "@/services/jobService";
import Link from "next/link";
import React, { useEffect } from "react";
import { theme } from "../page";

export default function JobDescriptionPage({
  params,
}: {
  params: { jobSlug: string };
}) {
  const [job, setJob] = React.useState<any>(null);

  const [open, setOpen] = React.useState(false);
  const formType = "fixed";

  useEffect(() => {
    getJobBySlug(params.jobSlug)
      .then((job) => {
        setJob(job);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);

  return (
    <>
      <JobDescription>
        <div className="hidden md:flex item-center mb-6 w-10 p-2 rounded-full bg-slate-200 text-slate-700 hover:shadow-sm hover:shadow-slate-400 transition-all ease-in ">
          <Link href="/client2">
            <BackArrow />
          </Link>
        </div>
        <JobHeader
          name={{
            name: job?.name,
            style: "font-serif font-bold",
          }}
          company={{ name: job?.company.company_name, style: "font-mono" }}
          buttonStyle={{
            variant: "destructive",
            style: `rounded-none font-mono text-xl ${theme?.colors?.buttonBg} ${theme?.colors?.hoverButtonBg}`,
          }}
          setOpen={setOpen}
          formType={formType}
          buttonPosition="down"
        />
        <JobDescContent>
          <div className="flex justify-center min-h-[500px] text-slate-600 text-md md:text-lg leading-7 self-stretch items-stretch my-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <p
              dangerouslySetInnerHTML={{ __html: job?.job_description_text }}
            ></p>
          </div>
        </JobDescContent>
        <ApplicationForm
          variant={formType}
          open={open}
          setOpen={setOpen}
          formType={formType}
          inputs={[
            {
              name: "phone_number",
              placeholder: "Phone Number",
            },
            {
              name: 'state',
              placeholder: 'State'
            }
          ]}
          checkbox={[
            {
              terms: "I agree to the terms and conditions",
            },
          ]}
          className="font-mono"
        >
          <Button
            className="row-end-auto rounded-none col-span-2 justify-self-end mt-5 font-mono"
            type="submit"
            variant={"destructive"}
          >
            Apply Now
          </Button>
        </ApplicationForm>
      </JobDescription>
    </>
  );
}
