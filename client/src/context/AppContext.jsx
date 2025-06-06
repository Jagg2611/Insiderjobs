import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

// 1. Create a context object
export const AppContext = createContext();

// 2. Create a provider component
export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]); // Example state for jobs
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  //Function to fetch jobs data
  const fetchJobs = async () => {
    setJobs(jobsData);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs, // Function to update jobs state
    showRecruiterLogin,
    setShowRecruiterLogin,
    // You can add more state variables and functions here as needed
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
      {/* Children components wrapped in the provider can access the context */}
    </AppContext.Provider>
  );
};
