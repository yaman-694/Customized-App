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
        console.log(data.data);
        setJobs(data.data);
      });
  }, []);

  return (
    <div className="flex flex-col mt-7">
      {jobs && jobs.length > 0 && (
        <>
          {jobs.map((job: any) => (
            <div className="mb-3" key={job.job_id}>
              <JobCard
                key={job.job_id}
                jobName={{
                  name: job.name,
                  font: "text-3xl",
                  fontWeight: "font-semibold",
                  fontColor: "text-black",
                }}
                jobDescription={job.description}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
