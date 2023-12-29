"use server";

import { FilterBox } from "@/contexts/filterContext";

const API = "https://solutions-test.recruitcrm.io";
const KEY = "37c5b338-7063-4047-8941-f01ff507b2f3";

export const getJobs = async () => {
  const response = await fetch(
    `${API}/jobs/${KEY}?keys=custom_field[2],job_category,job_type&limit=10`
  );
  const data = await response.json();
  return data;
};

export const getJobsNextPage = async (url: string) => {
  if (!url) return;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const searchJobs = async ({ filter }: { filter: FilterBox }) => {
  let query = "";
  if (filter.jobName) {
    query += `search_keyword=${filter.jobName}&`;
  }
  if (filter.city?.length) {
    query += `city=${filter.city.join(",")}&`;
  }
  if (filter.country?.length) {
    query += `country=${filter.country.join(",")}`;
  }
  const response = await fetch(
    `${API}/jobs/search/${KEY}?${query}&keys=custom_field[2],job_category,job_type`
  );
  const data = await response.json();
  return data;
};

export const getJobBySlug = async (slug: string) => {
  const response = await fetch(`${API}/jobs/by-slug/${KEY}?job_slug=${slug}`);
  const data = await response.json();
  return data;
};

export const getKeys = async (keys: string) => {
  const response = await fetch(`${API}/jobs/additional-info/${KEY}?keys=${keys}`);
  const data = await response.json();
  const revisedData = data?.unique_values?.map((country: string) => {
    return {
      label: JSON.parse(country)[`${keys}`].S,
      value: JSON.parse(country)[`${keys}`].S,
    };
  });
  return revisedData;
}