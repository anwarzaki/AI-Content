import React from "react";
import Sidbar from "./_components/Sidbar";
// import Header from "./_components/Header";

const dashLayout = ({ children }) => {
  return (
    <div>
      <div className="md:w-64 hidden  md:block">
        <Sidbar />
      </div>
      <div className="md:ml-64">
        {/* <Header /> */}
        {children}
      </div>
    </div>
  );
};

export default dashLayout;
