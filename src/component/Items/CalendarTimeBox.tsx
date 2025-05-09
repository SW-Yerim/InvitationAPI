import React from "react";

interface Props {
  label: string;
  value: number;
}

const CalendarTimeBox: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="w-14 p-3 rounded-lg shadow text-center">
      <div className="text-xl font-bold">{String(value).padStart(2, "0")}</div>
      <div className="text-xs">{label}</div>
    </div>
  );
};

export default CalendarTimeBox;
