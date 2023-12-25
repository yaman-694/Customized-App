'use client';
import { getJobs, searchJobs } from "@/services/jobService";
import React, { useEffect, useReducer, useState } from "react";
import { useFilterContext } from "./filterContext";

type initialStateType = {
  defaultJobs: any[];
  searchJobs: any[];
  loading: boolean;
  search: boolean;
  nextPage: string;
};

const initialState = {
  defaultJobs: [],
  searchJobs: [],
  loading: true,
  search: true,
  nextPage: "",
};

interface JobContextType {
  state: initialStateType;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  dispatch: React.Dispatch<{ type: string; value?: any }>;
}

const jobReducer = (
  state: initialStateType,
  action: {
    type: string;
    value?: any;
  }
): initialStateType => {
  switch (action.type) {
    case "GET_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_JOB":
      return {
        ...state,
        defaultJobs: action.value.data,
        searchJobs: action.value.data,
        loading: false,
        nextPage: action.value.next_page_url,
      };
    case "NEXT_PAGE":
      return {
        ...state,
        defaultJobs: [...state.defaultJobs, ...action.value.data],
        searchJobs: [...state.searchJobs, ...action.value.data],
        loading: false,
        nextPage: action.value.next_page_url,
      };
    case "SEARCH_JOB":
      return {
        ...state,
        searchJobs: action.value.data,
        loading: false,
        nextPage: action.value.next_page_url,
      };
    case "SEARCH_START":
      return {
        ...state,
        search: true,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const JobContext = React.createContext({} as JobContextType);

const JobProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);
  const filter = useFilterContext();
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function getData() {
      dispatch({ type: "GET_START" });
      const data = await getJobs();
      dispatch({ type: "GET_JOB", value: data });
    }
    if (!filter.state.active) getData();
  }, [filter.state, page]);

  // search jobs
  useEffect(() => {
    async function getData() {
      dispatch({ type: "GET_START" });
      const data = await searchJobs({ filter: filter.state });
      console.log(data);
      dispatch({ type: "SEARCH_JOB", value: data });
    }
    if(filter.state.active)
      getData();
  }, [filter.state]);

  return (
    <JobContext.Provider value={{ state, dispatch, page, setPage }}>
      {children}
    </JobContext.Provider>
  );
};

function useJobContext() {
  const context = React.useContext(JobContext);
  if (context === undefined) {
    throw new Error("useJobContext must be used within a jobContextProvider");
  }
  return context;
}

export { JobProvider, useJobContext };
