'use client';
import React, { useEffect, useReducer } from 'react';

export type FilterBox = {
  country?: string[];
  role?: string[];
  city?: string[];
  skill?: string[];
  jobName?: string | string[];
  active: boolean;
};

interface FilterBoxContextType {
  state: FilterBox;
  dispatch: React.Dispatch<{ type: string; value?: string[] | string }>;
}

const initialState = {
  jobName: '',
  skill: [],
  country: [],
  role: [],
  city: [],
  active: false,
};

const FilterBoxContext = React.createContext({} as FilterBoxContextType);

const filterBoxReducer = (
  state: FilterBox,
  action: { type: string; value?: string | string[] },
): FilterBox => {
  switch (action.type) {
    case 'ADD_COUNTRY':
      return {
        ...state,
        country: action.value
          ? Array.isArray(action.value)
            ? action.value
            : [action.value]
          : undefined,
        active: true,
      };
    case 'ADD_ROLE':
      return {
        ...state,
        role: action.value
          ? Array.isArray(action.value)
            ? action.value
            : [action.value]
          : undefined,
        active: true,
      };
    case 'ADD_CITY':
      return {
        ...state,
        city: action.value
          ? Array.isArray(action.value)
            ? action.value
            : [action.value]
          : undefined,
        active: true,
      };
    case 'ADD_SKILL':
      return {
        ...state,
        skill: action.value
          ? Array.isArray(action.value)
            ? action.value
            : [action.value]
          : undefined,
        active: true,
      };
    case 'ADD_JOB_NAME':
      return {
        ...state,
        jobName: action.value,
        active: true,
      };
    case 'REMOVE_COUNTRY':
      return {
        ...state,
        country: state.country?.filter(
          (country) => country !== action.value,
        ),
        active: true,
      };
    case 'REMOVE_ROLE':
      return {
        ...state,
        role: state.role?.filter((role) => role !== action.value),
        active: true,
      };
    case 'REMOVE_CITY':
      return {
        ...state,
        city: state.city?.filter((city) => city !== action.value),
        active: true,
      };
    case 'REMOVE_SKILL':
      return {
        ...state,
        skill: state.skill?.filter((skill) => skill !== action.value),
        active: true,
      };
    case 'REMOVE_JOBNAME':
      return {
        ...state,
        jobName: '',
        active: true,
      };
    case 'RESET':
      return {
        ...initialState,
        active: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const FilterBoxProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(filterBoxReducer, initialState);

  useEffect(() => {
    console.log(state);
  },[state])

  return (
    <FilterBoxContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FilterBoxContext.Provider>
  );
};

function useFilterContext() {
  const context = React.useContext(FilterBoxContext);
  if (context === undefined) {
    throw new Error('useFilterBox must be used within a FilterBoxProvider');
  }
  return context;
}

export { FilterBoxProvider, useFilterContext };
