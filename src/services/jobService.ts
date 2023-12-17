'use server';

import { FilterBox } from "@/contexts/filterContext";

const API = "https://solutions-test.recruitcrm.io";
const KEY = "37c5b338-7063-4047-8941-f01ff507b2f3";

export const getJobs = async () => {
  
  const response = await fetch(`${API}/jobs/${KEY}`);
  const data = await response.json();
  return data;
};

export const searchJobs = async ({ filter }: { filter: FilterBox }) => {
  let query = "";
  if(filter.jobName) {
    query += `search_keyword=${filter.jobName}&`;
  }
  if(filter.city?.length) {
    query += `city=${filter.city.join(",")}&`;
  }
  if(filter.country?.length) {
    query += `country=${filter.country.join(",")}`;
  }
  console.log(query);
  const response = await fetch(`${API}/jobs/search/${KEY}?${query}`);
  const data = await response.json();
  return data;
};

export const getJobBySlug = async (slug: string) => {
  const response = await fetch(`${API}/jobs/by-slug/${KEY}?job_slug=${slug}`);
  const data = await response.json();
  console.log(data);
  return data;
}