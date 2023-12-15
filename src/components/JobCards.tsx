import { useEffect, useState } from "react";
import {JobCard} from "./JobCard";

export function JobCards() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      "https://solutions-test.recruitcrm.io/jobs/37c5b338-7063-4047-8941-f01ff507b2f3"
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.data);
      });
  }, []);

  return (
    <div className="flex flex-col">
      {jobs && jobs.length > 0 && (
        <>
          {jobs.map((job) => (
            <div className="mb-3" key={job.job_id}>
              <JobCard
                key={job.job_id}
                jobName={job.name}
                jobDescription={job.description}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
