import {
  DescriptionApplyButtonProps,
  JobDescriptionHeaderType,
} from "@/interfaces";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const ApplyButton = ({
  setOpen,
  buttonStyle,
  formType,
}: DescriptionApplyButtonProps) => {
  return (
    <div
      className="flex flex-col"
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
      <Button
        variant={buttonStyle?.variant || "outline"}
        className={cn(
          "text-sm md:text-xl py-4 px-5 md:py-6 md:px-7 ",
          buttonStyle?.style
        )}
      >
        Apply Now
      </Button>
    </div>
  );
};

export default function JobHeader({
  name,
  company,
  children,
  setOpen,
  buttonStyle,
  formType,
  buttonPosition,
  goBackButton
}: JobDescriptionHeaderType) {
  return (
    <div className="flex justify-between flex-wrap gap-6">
      <div className="self-stretch flex flex-col justify-between gap-1 pr-1.5 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="flex flex-col gap-1 flex-wrap">
          <header
            className={cn(
              "text-black text-5xl font-bold max-w-[500px] max-md:text-3xl",
              name.style
            )}
          >
            {name.name}
          </header>
          <section
            className={cn(
              "text-slate-400 text-base font-medium whitespace-nowrap",
              company.style
            )}
          >
            {company.name}
          </section>
        </div>
        {buttonPosition === "down" && (
          <div className="mt-5">
            <ApplyButton
              setOpen={setOpen}
              buttonStyle={buttonStyle}
              formType={formType}
            />
          </div>
        )}
        <div className="flex items-stretch justify-between gap-4 mt-5">
          {children}
        </div>
      </div>
      {(buttonPosition !== "down" || !buttonPosition) && (
        <ApplyButton
          setOpen={setOpen}
          buttonStyle={buttonStyle}
          formType={formType}
        />
      )}
    </div>
  );
}
