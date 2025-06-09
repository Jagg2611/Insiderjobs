import React, { useContext, useEffect, useState, useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { companyData, setCompanyData, setCompanyToken } =
    useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Function to logout for company
  const logout = () => {
    setCompanyToken(null);
    localStorage.removeItem("companyToken");
    setCompanyData(null);
    navigate("/");
  };

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (companyData) {
      navigate("/dashboard/manage-jobs");
    }
  }, [companyData]);

  return (
    <div className="min-h-screen">
      {/* Navbar for recruiter panel */}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={() => navigate("/dashboard/add-job")}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          {companyData && (
            <div className="flex items-center gap-3" ref={menuRef}>
              <p className="max-sm:hidden">Welcome, {companyData.name}</p>
              <div className="relative">
                <img
                  className="w-8 border rounded-full cursor-pointer"
                  src={companyData.image}
                  alt=""
                  onClick={() => setMenuOpen((prev) => !prev)}
                />
                {menuOpen && (
                  <div className="absolute top-full right-0 z-10 text-black rounded mt-2 bg-white border shadow-md">
                    <ul className="list-none m-0 p-2 text-sm">
                      <li
                        onClick={() => {
                          logout();
                          setMenuOpen(false);
                        }}
                        className="py-1 px-4 cursor-pointer hover:bg-gray-100"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start">
        {/* Sidebar for recruiter panel */}
        <div className="inline-block min-h-screen border-r-2">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive
                    ? "bg-blue-100 border-r-4 border-blue-500"
                    : "text-gray-800"
                }`
              }
              to={"/dashboard/add-job"}
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive
                    ? "bg-blue-100 border-r-4 border-blue-500"
                    : "text-gray-800"
                }`
              }
              to={"/dashboard/manage-jobs"}
            >
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive
                    ? "bg-blue-100 border-r-4 border-blue-500"
                    : "text-gray-800"
                }`
              }
              to={"/dashboard/view-applications"}
            >
              <img className="min-w-4" src={assets.person_tick_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>
        <div className="flex-1 h-full p-2 sm:p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
