import React from "react";
import Layout from "../common/Layout";

interface Props {
  brideAndGroom: {
    groomFirstName: string;
    groomLastName: string;
    brideFirstName: string;
    brideLastName: string;
  };
  dateData: {
    date1: string;
    date2: string;
    date3: string;
    day1: string;
    day2: string;
    day3: string;
    time1: string;
    time2: string;
    location: string;
  };
}

const MainSection: React.FC<Props> = ({ brideAndGroom, dateData }) => (
  <Layout>
    <div
      className="
      relative p-5 pt-14 pb-10 border-2 border-quasi-black
      lg:pt-28
      "
    >
      <div
        className="
        absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        font-adelio tracking-widest text-3xl
        mb-8 pl-8 pr-8
        lg:text-6xl bg-white"
      >
        <p>{dateData.date3}</p>
        <p>{dateData.day1}</p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/images/wedding-cover.jpg`}
        alt="wedding cover"
        className="w-full max-w-lg mx-auto max-h-[33rem] object-cover object-center"
      />
      <div
        className="
        mt-4 mb-4
        font-bold text-lg
        lg:text-2xl lg:mt-10"
      >
        {brideAndGroom.groomFirstName}
        {brideAndGroom.groomLastName}
        <span className="p-4 text-lg"> | </span>
        {brideAndGroom.brideFirstName}
        {brideAndGroom.brideLastName}
      </div>
      <div
        className="
        text-sm
        lg:mb-4 lg:text-base"
      >
        <p>
          {dateData.date1} {dateData.day3} {dateData.time1}
        </p>
        <p>{dateData.location}</p>
      </div>
    </div>
  </Layout>
);

export default MainSection;
