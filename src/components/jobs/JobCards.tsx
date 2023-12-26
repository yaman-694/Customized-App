"use client";
import Link from "next/link";

import { useJobContext } from "@/contexts/jobContext";
import LoadMore from "../ui/LoadMore";
import { JobCard } from "./JobCardDesigns/JobCard";
import { JobCard2 } from "./JobCardDesigns/JobCard2";
import { JobCardsPropsType } from "@/interfaces";

export const JobCards: React.FC<JobCardsPropsType> = ({
  jobCardType,
  jobNameStyle,
  descriptionStyle,
  clientId
}) => {
  const {
    state: { searchJobs, loading },
  } = useJobContext();
  const jobs = searchJobs;
  let JobCardDesign = JobCard;
  if (jobCardType === "JobCard2") {
    JobCardDesign = JobCard2;
  }
  return (
    <div className="h-screen">
      <div className="flex flex-col mt-7">
        {!loading && jobs?.length === 0 && (
          <div className="flex justify-center items-center">
            <div className="text-2xl font-semibold text-gray-900">
              No jobs found
            </div>
          </div>
        )}
        {!loading && jobs && jobs.length > 0 && (
          <>
            {jobs.map((job) => (
              <div className="mb-3 md:mb-5" key={job.job_id}>
                <Link href={`/${clientId}/${job.job_slug}`} passHref legacyBehavior>
                  <a target="_blank">
                    <JobCardDesign
                      id={job.job_slug}
                      key={job.job_id}
                      jobName={{
                        name: job.name,
                        ...jobNameStyle,
                      }}
                      jobDescription={{
                        description: job.custom_fields[0]?.value,
                        ...descriptionStyle,
                      }}
                    />
                  </a>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
      <LoadMore />
    </div>
  );
}
