import React from "react";

interface Props {
  title: string;
  text: string;
}

const ContentTitle: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="mb-10">
      <span className="font-font3 block text-base">{title}</span>
      <h2 className="font-font1 text-2xl font-semibold mb-2">{text}</h2>
    </div>
  );
};

export default ContentTitle;
