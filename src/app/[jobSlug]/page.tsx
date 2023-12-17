'use client';

import JobDescription from '@/components/jobs/JobDescription';
import { getJobBySlug } from '@/services/jobService'
import React, { useEffect } from 'react'

export default function JobDescriptionPage({params}: {params: {jobSlug: string}}) {
  const [job, setJob] = React.useState<any>(null)
  useEffect(() => {
    getJobBySlug(params.jobSlug).then((job) => {
      setJob(job)
    }).catch((error) => {
      console.log(error)
    })
  }, [params])
  return (
    <>
      <JobDescription job={job} />
    </>
  )
}
