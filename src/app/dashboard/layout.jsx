'use client';
// import React, { useState } from "react";
import Sidbar from "./_components/Sidbar";
import Header from "./_components/Header";

const DashLayout = ({ children }) => {
  // Initialize state within the component

  return (
    // <UserCourseListContext.Provider value={{ }}>
      <div className="min-h-screen bg-white">
        <div className="md:w-64 hidden md:block">
          <Sidbar />
        </div>
        <div className="md:ml-64">
          <Header />
          <div className="p-10">
            {children}
          </div>
        </div>
      </div>
    // </UserCourseListContext.Provider>
  );
};

export default DashLayout;
