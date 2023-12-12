import { Button } from "./ui/Button";
import { BottomGradients, TopGradients } from "./ui/Gradients";
import { Heading } from "./ui/Hero/Heading";
import { SubHeading } from "./ui/Hero/SubHeading";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <TopGradients />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <Heading>
              Get Your Job
            </Heading>
            <SubHeading>
              Empower your career with a dynamic and collaborative work
              environment.
            </SubHeading>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant={'blue'}>Get started</Button>
              <Button variant={'wt_bg'} className="gap-1">
                Learn more <span aria-hidden="true">→</span>
              </Button>
            </div>
            <BottomGradients />
          </div>
        </div>
      </div>
    </div>
  );
}
