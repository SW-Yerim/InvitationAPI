import React from "react";
import ModalLayout from "../common/ModalLayout";

interface Props {
  closeModal: any;
  selectedImage: string;
}
const GalleryModal: React.FC<Props> = ({ closeModal, selectedImage }) => {
  return (
    <ModalLayout closeModal={closeModal}>
      <img
        src={`${process.env.PUBLIC_URL}/${selectedImage}`}
        alt="선택된 이미지"
        className="max-w-full max-h-full"
      />
    </ModalLayout>
  );
};

export default GalleryModal;
