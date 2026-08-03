import React from "react";

import { useState } from "react";
import TodayApp from "./TodayApp";
import Seo from "../../../components/SEO/seo";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Seo title="Nexa Careers Dashboard" url="https://saboonexa.in/dashboard" noindex />
      <div className="flex w-full h-screen mx-auto font-roboto">
        <div className="h-[80vh] lg:h-[90vh]  w-full  px-4 ">
          <TodayApp open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
