import React from "react";

interface Props {
  openModal: any;
  text: string;
  icon?: string;
}

const ButtonLayout: React.FC<Props> = ({ openModal, text, icon }) => {
  return (
    <div
      onClick={() => openModal()}
      className="max-w-xs mx-auto py-2 px-6 rounded-full text-sm text-quasi-brown2 border border-quasi-brown2 hover:bg-quasi-brown2 hover:text-quasi-light cursor-pointer"
    >
      <p>
        {icon && (
          <img
            className="inline w-4 mr-2 opacity-70"
            src={`${process.env.PUBLIC_URL}/icons/${icon}.svg`}
            alt="아이콘 이미지"
          />
        )}
        {text}
      </p>
    </div>
  );
};

export default ButtonLayout;
