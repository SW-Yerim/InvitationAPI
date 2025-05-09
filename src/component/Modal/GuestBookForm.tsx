import React, { useState } from "react";
import { addMessage } from "../../utils/guestbook";
import ContentTitle from "../common/ContentTitle";
import ModalLayout from "../common/ModalLayout";
import NoticeModal from "../common/NoticeModal";

interface Props {
  closeModal: any;
  refreshMessages: any;
}

const GuestBookForm: React.FC<Props> = ({ closeModal, refreshMessages }) => {
  const [error, setError] = useState("");

  const closeError = () => {
    setError("");
  };

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    // 유효성 검사
    if (!name.trim()) {
      setError("이름을 입력해주세요.");
      return;
    }

    if (!message.trim()) {
      setError("메세지를 입력해주세요.");
      return;
    }

    await addMessage(name, message);
    setName("");
    setMessage("");
    refreshMessages();
    closeModal();
  };

  return (
    <>
      <ModalLayout closeModal={closeModal}>
        {/* 제목 영역 */}
        <ContentTitle title="GuestBook" text="방명록 등록" />
        <form
          onSubmit={handleSubmit}
          className="max-w-xl min-w-[18rem] mx-auto"
        >
          <div className="flex items-start gap-2 text-sm mb-3">
            <label htmlFor="name" className="w-10 lg:w-20 pt-2">
              이름
            </label>
            <input
              id="name"
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 border rounded-md p-2 shadow-sm 
            focus:outline-none focus:ring-1 focus:ring-quasi-brown1"
            />
          </div>

          <div className="flex items-start gap-2 text-sm mb-5">
            <label htmlFor="message" className="w-10 lg:w-20 pt-2">
              메세지
            </label>
            <textarea
              id="message"
              placeholder="축하 메세지를 입력해주세요"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border rounded-md p-2 h-32 shadow-sm resize-none 
            focus:outline-none focus:ring-1 focus:ring-quasi-brown1"
            />
          </div>

          <div>
            <button
              type="submit"
              className="block max-w-xs mx-auto py-1 px-6 rounded-full 
            border border-quasi-brown2 
            text-[0.8rem] text-quasi-brown2 
            hover:bg-quasi-brown2 hover:text-quasi-light"
            >
              등록
            </button>
          </div>
        </form>

        {error && (
          <NoticeModal type="error" message={error} closeError={closeError} />
        )}
      </ModalLayout>
    </>
  );
};

export default GuestBookForm;
