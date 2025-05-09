import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";

interface Props {
  openModal: (image: any) => void;
}

const images = [
  { url: "/images/image1.jpg", posX: "", posY: "" },
  { url: "/images/image2.jpg", posX: "", posY: "" },
  { url: "/images/image3.jpg", posX: "", posY: "" },
  { url: "/images/image5.jpg", posX: "", posY: "" },
  { url: "/images/image6.jpg", posX: "", posY: "" },
  { url: "/images/image7.jpg", posX: "", posY: "" },
  { url: "/images/image8.jpg", posX: "", posY: "" },
  { url: "/images/image9.jpg", posX: "", posY: "" },
];

const GallarySlider: React.FC<Props> = ({ openModal }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // 썸네일 슬라이드 중앙 정렬
  const thumbCenterHandler = (swiper: any) => {
    if (thumbsSwiper && thumbsSwiper.slideToLoop) {
      let centerIndex = 0;

      if (swiper.realIndex === 0) {
        centerIndex = images.length - 2;
      } else if (swiper.realIndex === 1) {
        centerIndex = images.length - 1;
      } else {
        centerIndex = Math.max(0, swiper.realIndex - 2);
      }

      thumbsSwiper.slideToLoop(centerIndex);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* 메인 슬라이드 */}
      <Swiper
        modules={[Thumbs, Navigation]}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper: any) => {
          thumbCenterHandler(swiper);
        }}
        spaceBetween={10}
        navigation={true}
        loop={true}
        className="mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/${image.url}`}
              alt={`Main ${index + 1} 이미지`}
              className="w-full h-[400px] object-contain object-center rounded-xl
              lg:h-[700px]"
              onClick={() => openModal(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 썸네일 슬라이드 */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        className="mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/${image.url}`}
              alt={`Thumb ${index + 1} 이미지`}
              className="w-full bject-contain object-center cursor-pointer"
              style={{ objectPosition: "50% 20%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallarySlider;
