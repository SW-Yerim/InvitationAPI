import React, { useState } from "react";
import ContentTitle from "../common/ContentTitle";
import GallarySlider from "../Items/GallarySlider";
import Layout from "../common/Layout";
import ModalLayout from "../common/ModalLayout";
import GalleryModal from "../Modal/GalleryModal";

const GallerySection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // 사진 클릭 시 모달 창 제어
  const openModal = (image: any) => {
    setSelectedImage(image.url);
    setIsOpen(true);
    console.log("image", image);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Layout>
        {/* 제목 영역 */}
        <ContentTitle title="GALLERY" text="사진보기" />

        {/* 컨텐츠 영역 */}
        <GallarySlider openModal={openModal} />
      </Layout>

      {/* 모달창 */}
      {isOpen && selectedImage && (
        <GalleryModal closeModal={closeModal} selectedImage={selectedImage} />
      )}
    </>
  );
};

export default GallerySection;
