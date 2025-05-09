import React from "react";
import ModalLayout from "../common/ModalLayout";
import ContentTitle from "../common/ContentTitle";
import FamilyItem from "../Items/FamilyItem";

interface Props {
  closeModal: any;
  members: {
    title: string;
    firstName: string;
    lastName: string;
    phone: string;
    bank: string;
  }[];
}

const ContactModal: React.FC<Props> = ({ closeModal, members }) => {
  return (
    <ModalLayout closeModal={closeModal}>
      <ContentTitle title="CONTACT" text="연락하기" />

      <div className="text-left text-sm text-center">
        <div className="mb-6 pb-2 border-b">
          {members.slice(0, 3).map((member, index) => (
            <FamilyItem color="blue3" index={index} member={member} />
          ))}
        </div>
        <div>
          {members.slice(3).map((member, index) => (
            <FamilyItem color="rose3" index={index} member={member} />
          ))}
        </div>
      </div>
    </ModalLayout>
  );
};

export default ContactModal;
