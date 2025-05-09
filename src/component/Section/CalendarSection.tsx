import React from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Layout from "../common/Layout";
import CalendarItem from "../Items/CalendarItem";
import CalendarTime from "../Items/CalendarTime";
dayjs.extend(duration);

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

const CalendarSection: React.FC<Props> = ({ brideAndGroom, dateData }) => {
  return (
    <Layout>
      <div className="mb-6 text-quasi-brown3">
        <h2 className="text-xl mb-2">
          {dateData.date2} {dateData.day2}
        </h2>
        <p className="">{dateData.time2}</p>
      </div>

      {/* 달력 레이아웃 */}
      <CalendarItem />

      {/* D-Day 까지 남은 시간 */}
      <CalendarTime brideAndGroom={brideAndGroom} dateData={dateData} />
    </Layout>
  );
};

export default CalendarSection;
