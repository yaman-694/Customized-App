"use client";
import Link from "next/link";

import { useJobContext } from "@/contexts/jobContext";
import { JobCard } from "./JobCard";

export function JobCards() {
    const {
        state: { searchJobs, loading },
    } = useJobContext();
    const jobs = searchJobs;

    const handleClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        // Check if the clicked element is a JobCard or its child
        const jobCardElement = (event.target as Element).closest(".job-card");

        if (jobCardElement) {
            // If it's a JobCard, get the id attribute
            const jobId = jobCardElement.getAttribute("id");
        }
    };

    return (
        <div className="h-screen">
            <div className="flex flex-col mt-7">
                {loading && (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-2 border-gray-900"></div>
                    </div>
                )}
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
                            <div className="mb-3" key={job.job_id}>
                                <Link href={`/${job.job_slug}`}>
                                    <JobCard
                                        className="job-card"
                                        id={job.job_slug} // Set the 'id' attribute here
                                        key={job.job_id}
                                        jobName={{
                                            name: job.name,
                                            font: "text-3xl",
                                            fontWeight: "font-semibold",
                                            fontColor: "text-black",
                                        }}
                                        jobDescription={{
                                            description:
                                                job.custom_fields[0].value,
                                        }}
                                    />
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
