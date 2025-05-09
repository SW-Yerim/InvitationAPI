import React from "react";

interface Props {
  type: string;
  message: string;
  closeError: any;
}

const NoticeModal: React.FC<Props> = ({ type, message, closeError }) => {
  return (
    <div
      className="
        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        min-w-[18rem]
        p-10 shadow-lg
        bg-white rounded-md 
        text-sm text-center z-50
        "
    >
      <div className="mb-6 text-xl text-center">
        {type === "error" && (
          <img
            className="inline w-12"
            src="/icons/notice.svg"
            alt="주의 아이콘"
          />
        )}
      </div>
      {message}
      <p
        onClick={() => closeError()}
        className="w-[100px] mx-auto mt-6 py-1 px-6 rounded-lg
      border border-quasi-brown2 
      text-[0.8rem] text-quasi-brown2 
      hover:bg-quasi-brown2 hover:text-quasi-light"
      >
        확인
      </p>
    </div>
  );
};

export default NoticeModal;
