import React from "react";

interface Props {
  children: React.ReactNode;
  closeModal: any;
}

const ModalLayout: React.FC<Props> = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="relative lg:w-full max-w-lg mx-auto m-20 p-10 bg-white rounded-lg">
        {/* 닫기 버튼 */}
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 p-4 text-white"
        >
          <img
            src={`${process.env.PUBLIC_URL}/icons/close.svg`}
            alt="닫기 아이콘"
          />
        </button>

        {/* 모달 컨텐츠 영역 */}
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
