import Link from "next/link";
import { Button } from "../ui/Button";
import { Badge } from "../ui/badge";

export default function JobHeader({
  name,
  company,
  jobType,
  type,
  open,
  setOpen,
  formType,
}: {
  name: string;
  company: string;
  jobType: string;
  type: string;
  open: boolean;
  setOpen: any;
  formType: any;
}) {
  return (
    <div className="flex justify-between flex-wrap gap-6">
      <div className="self-stretch flex flex-col justify-between gap-1 pr-1.5 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="flex flex-col gap-1 flex-wrap">
          <header className="text-black text-5xl font-bold max-w-[500px] max-md:text-3xl">
            {name}
          </header>
          <section className="text-slate-400 text-base font-medium whitespace-nowrap">
            {company}
          </section>
        </div>
        <div className="flex items-stretch justify-between gap-4 mt-5">
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
            <Badge
              className="justify-center text-gray-700 text-center text-sm whitespace-nowrap rounded items-stretch px-2.5 py-[5px]"
              variant={"secondary"}
            >
              {jobType}
            </Badge>
          </div>
          <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
            <Badge
              className="justify-center text-gray-700 text-center text-sm whitespace-nowrap rounded items-stretch px-2.5 py-[5px]"
              variant={"secondary"}
            >
              {type}
            </Badge>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-stretch"
        onClick={() => {
          if (formType === "fixed") setOpen(true);
          else {
            const applicationFormElement =
              document.getElementById("application__form");
            if (applicationFormElement) {
              applicationFormElement.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
      >
        <Button variant={"blue"} className="text-sm md:text-xl py-4 px-5 md:py-6 md:px-7">
          Apply Now
        </Button>
      </div>
    </div>
  );
}
