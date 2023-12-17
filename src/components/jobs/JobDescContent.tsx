import React from "react";

export default function JobDescContent({ description }: { description: string }) {
  return (
    <div className="flex justify-center min-h-[500px] text-slate-600 text-lg leading-7 bg-slate-100 self-stretch items-stretch my-16 px-12 py-12 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
}
