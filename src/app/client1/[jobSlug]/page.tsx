"use client";

import { ApplicationForm } from "@/components/jobs/ApplicationForm";
import JobDescContent from "@/components/jobs/JobDescContent";
import JobDescription from "@/components/jobs/JobDescription";
import JobHeader from "@/components/jobs/JobHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getJobBySlug } from "@/services/jobService";
import React, { useEffect } from "react";

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
        <JobHeader
          name={{
            name: job?.name,
            fontFamily: "font-sans",
          }}
          company={job?.company.company_name}
          setOpen={setOpen}
          formType={formType}
        >
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
            <Badge
              className="justify-center text-gray-700 text-center text-sm whitespace-nowrap rounded items-stretch px-2.5 py-[5px]"
              variant={"secondary"}
            >
              {job?.job_type}
            </Badge>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
            <Badge
              className="justify-center text-gray-700 text-center text-sm whitespace-nowrap rounded items-stretch px-2.5 py-[5px]"
              variant={"secondary"}
            >
              {job?.job_category}
            </Badge>
          </div>
        </JobHeader>
        <JobDescContent>
          <div className="flex justify-center min-h-[500px] text-slate-600 text-md md:text-lg leading-7 bg-slate-100 self-stretch items-stretch my-16 px-12 py-12 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
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
          ]}
          checkbox={[
            {
              terms: "I agree to the terms and conditions",
            },
          ]}
          defaultInputs={{
            phone_number: "",
          }}
        >
          <Button
            className="row-end-auto col-span-2 justify-self-end mt-5"
            type="submit"
            variant={"blue"}
          >
            Apply Now
          </Button>
        </ApplicationForm>
      </JobDescription>
    </>
  );
}
