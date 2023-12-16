import { useJobContext } from "@/contexts/jobContext";
import { JobCard } from "./JobCard";

export function JobCards() {
  const {
    state: { defaultJobs, searchJobs, loading },
  } = useJobContext();
  const jobs = searchJobs;

  const handleClick = () => {

  }
  return (
    <div className="h-screen">
    <div className="flex flex-col mt-7" onClick={handleClick}>
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
    </div>
  );
}
