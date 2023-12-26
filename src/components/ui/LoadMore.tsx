"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useJobContext } from "@/contexts/jobContext";
import { getJobsNextPage } from "@/services/jobService";

export default function LoadMore() {
  const { ref, inView } = useInView();
  const {
    state: { nextPage },
    dispatch,
  } = useJobContext();
  useEffect(() => {
    async function loadMore() {
      const response = await getJobsNextPage(nextPage);
      if (!response) return;
      dispatch({ type: "NEXT_PAGE", value: response });
    }
    if (inView) {
      loadMore();
    }
  }, [inView, nextPage, dispatch]);
  return (
    <section>
      {nextPage && <div ref={ref}>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-2 border-gray-900"></div>
        </div>
      </div>}
    </section>
  );
}
