import React, { useEffect, useReducer } from 'react';

export type FilterBox = {
  country?: string[];
  role?: string[];
  location?: string[];
  city?: string[];
  skill?: string[];
  jobName?: string | string[];
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
  location: [],
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
      };
    case 'ADD_ROLE':
      return {
        ...state,
        role: action.value
          ? Array.isArray(action.value)
            ? action.value
            : [action.value]
          : undefined,
      };
    case 'ADD_LOCATION':
      return {
        ...state,
        location: action.value
          ? Array.isArray(action.value)
            ? action.value
            : [action.value]
          : undefined,
      };
    case 'ADD_CITY':
      return {
        ...state,
        city: action.value
          ? Array.isArray(action.value)
            ? action.value
            : [action.value]
          : undefined,
      };
    case 'ADD_SKILL':
      return {
        ...state,
        skill: action.value
          ? Array.isArray(action.value)
            ? action.value
            : [action.value]
          : undefined,
      };
    case 'ADD_JOB_NAME':
      return {
        ...state,
        jobName: action.value,
      };
    case 'RESET':
      return {
        ...initialState,
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

function useFilterBox() {
  const context = React.useContext(FilterBoxContext);
  if (context === undefined) {
    throw new Error('useFilterBox must be used within a FilterBoxProvider');
  }
  return context;
}

export { FilterBoxProvider, useFilterBox };
