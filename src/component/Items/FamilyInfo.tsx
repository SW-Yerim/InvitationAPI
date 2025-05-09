import React from "react";

interface Props {
  members: {
    title: string;
    firstName: string;
    lastName: string;
    phone: string;
    bank: string;
  }[];
}

const FamilyInfo: React.FC<Props> = ({ members }) => {
  return (
    <div className="text-base mb-8">
      <p>
        {members[1].firstName}
        {members[1].lastName} · {members[2].firstName}
        {members[2].lastName}
        <span className="inline-block w-14 text-xs"> 의 아들 </span>
        {members[0].lastName}
      </p>
      <p>
        {members[4].firstName}
        {members[4].lastName} · {members[5].firstName}
        {members[5].lastName}
        <span className="inline-block w-14 text-xs"> 의 딸 </span>
        {members[3].lastName}
      </p>
    </div>
  );
};

export default FamilyInfo;
