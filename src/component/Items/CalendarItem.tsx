import React from "react";

const CalendarItem = () => {
  return (
    <div className="w-full max-w-sm mx-auto grid grid-cols-7 gap-2 p-10 m-10 text-sm border-t border-b">
      {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
        <div
          key={d}
          className={`mb-2 font-semibold 
            ${d === "일" ? "text-quasi-rose3" : ""}
            ${d === "토" ? "text-quasi-blue3" : ""}`}
        >
          {d}
        </div>
      ))}
      {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
        <div
          key={day}
          className={`p-2 rounded-full
            ${day % 7 === 1 ? "text-quasi-rose3" : ""}
            ${day % 7 === 0 ? "text-quasi-blue3" : ""}
            ${day === 22 ? "bg-quasi-rose3 text-quasi-white" : ""}`}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarItem;
