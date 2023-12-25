"use client";
import Link from "next/link";

import { useJobContext } from "@/contexts/jobContext";
import { JobCard } from "./JobCard";
import LoadMore from "../ui/LoadMore";

export function JobCards() {
  const {
    state: { searchJobs, loading },
  } = useJobContext();
  const jobs = searchJobs;
  
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
                <Link href={`/${job.job_slug}`} passHref legacyBehavior>
                  <a target="_blank">
                    <JobCard
                      className="job-card"
                      id={job.job_slug} // Set the 'id' attribute here
                      key={job.job_id}
                      jobName={{
                        name: job.name,
                        font: "text-2xl md:text-3xl",
                        fontWeight: "font-semibold",
                        fontColor: "text-black",
                      }}
                      jobDescription={{
                        description: job.custom_fields[0]?.value,
                        font: "text-sm md:text-base",
                        fontWeight: "font-medium",
                        fontColor: "text-gray-500",
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
