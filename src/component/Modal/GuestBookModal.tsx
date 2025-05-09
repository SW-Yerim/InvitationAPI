import React from "react";
import ModalLayout from "../common/ModalLayout";
import ContentTitle from "../common/ContentTitle";

interface Props {
  closeModal: any;
  message: any;
}

const GuestBookModal: React.FC<Props> = ({ closeModal, message }) => {
  return (
    <ModalLayout closeModal={closeModal}>
      {/* 제목 영역 */}
      <ContentTitle title="GuestBook" text="방명록" />

      <div className="min-w-[18rem] min-h-[20rem] p-10 bg-quasi-brown1 bg-opacity-25 rounded-2xl text-left">
        <div
          className="justify-between mb-4 pb-4 border-b-2 border-quasi-white
          lg:flex lg:mb-10"
        >
          <p className="font-semibold mb-1">{message?.name}</p>
          <p>
            {message?.createdAt
              ? new Date(message.createdAt.seconds * 1000).toLocaleString()
              : ""}
          </p>
        </div>
        <div className="whitespace-pre-wrap">{message?.message}</div>
      </div>
    </ModalLayout>
  );
};

export default GuestBookModal;
