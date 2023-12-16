import { getJobs, searchJobs } from "@/services/jobService";
import React, { useEffect, useReducer } from "react";
import { useFilterContext } from "./filterContext";

type initialStateType = {
  defaultJobs: any[];
  searchJobs: any[];
  loading: boolean;
};

const initialState = {
  defaultJobs: [],
  searchJobs: [],
  loading: true,
};

interface JobContextType {
  state: initialStateType;
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
    case 'GET_START':
      return {
        ...state,
        loading: true,
      };
    case "GET_JOB":
      return {
        ...state,
        defaultJobs: action.value,
        searchJobs: action.value,
        loading: false,
      };
    case "SEARCH_JOB":
      return {
        ...state,
        searchJobs: action.value,
        loading: false,
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

  useEffect(() => {
    async function getData() {
      dispatch({ type: "GET_START" });
      const data = await getJobs();
      dispatch({ type: "GET_JOB", value: data.data });
    }
    if (!filter.state.active) getData();
  }, [filter.state]);

  useEffect(() => {
    async function getData() {
      dispatch({ type: "GET_START" });
      const data = await searchJobs({ filter: filter.state });
      dispatch({ type: "SEARCH_JOB", value: data.data });
    }
    if(filter.state.active)
      getData();
  }, [filter.state]);

  return (
    <JobContext.Provider value={{ state, dispatch }}>
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
