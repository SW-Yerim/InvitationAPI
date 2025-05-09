import React, { useEffect, useState } from "react";
import CalendarTimeBox from "./CalendarTimeBox";
import dayjs from "dayjs";

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

const CalendarTime: React.FC<Props> = ({ brideAndGroom, dateData })  => {
  const inputDate = dateData.date2;
  const formattedDate = dayjs(
    inputDate.replace(/(\d{4})\. (\d{1,2})\. (\d{1,2})/, "$1-$2-$3")
  ).format("YYYY-MM-DDT14:00:00");

  const WEDDING_DATE = dayjs(formattedDate);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = dayjs();
    const diff = WEDDING_DATE.diff(now);
    const duration = dayjs.duration(diff);

    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="w-full max-w-64 mx-auto flex gap-4 mb-8 text-xs">
        <CalendarTimeBox label="DAYS" value={timeLeft.days} />
        <CalendarTimeBox label="HOUR" value={timeLeft.hours} />
        <CalendarTimeBox label="MIN" value={timeLeft.minutes} />
        <CalendarTimeBox label="SEC" value={timeLeft.seconds} />
      </div>
      <p className="">
        {brideAndGroom.brideLastName}
        <span className="text-quasi-rose3"> ♥ </span>
        {brideAndGroom.groomLastName}의 결혼식이
        <span className="text-quasi-rose3"> {timeLeft.days}일 </span>
        남았습니다.
      </p>
    </>
  );
};

export default CalendarTime;
