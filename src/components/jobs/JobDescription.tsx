import { BottomGradients } from "../ui/Gradients";
import { ApplicationForm } from "./ApplicationForm";
import JobDescContent from "./JobDescContent";
import JobHeader from "./JobHeader";

export default function JobDescription({ job }: { job: any }) {
  return (
    <div className="container max-w-5xl my-32 relative isolate lg:px-8">
      <JobHeader
        name={job?.name}
        company={job?.company.company_name}
        jobType={job?.job_type}
        type={job?.job_category}
      />
      <JobDescContent description={job?.job_description_text} />
      <ApplicationForm
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
      />
      <BottomGradients />
    </div>
  );
}
