import React from "react";

import { useState } from "react";
import TodayApp from "./TodayApp";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Helmet>
        <title>Nexa Careers Dashboard</title>
      </Helmet>
      <div className="flex w-full h-screen mx-auto font-roboto">
        <div className="h-[80vh] lg:h-[90vh]  w-full  px-4 ">
          <TodayApp open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
