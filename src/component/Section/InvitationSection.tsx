import React, { useState } from "react";
import ContentTitle from "../common/ContentTitle";
import Layout from "../common/Layout";
import ButtonLayout from "../common/ButtonLayout";
import ContactModal from "../Modal/ContactModal";
import FamilyInfo from "../Items/FamilyInfo";

interface Props {
  members: {
    title: string;
    firstName: string;
    lastName: string;
    phone: string;
    bank: string;
  }[];
}

const InvitationSection: React.FC<Props> = ({ members }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 연락하기 버튼 클릭 시 모달 창 제어
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Layout>
        {/* 제목 영역 */}
        <ContentTitle title="INVITATION" text="소중한 분들을 초대합니다" />

        {/* 컨텐츠 영역 */}
        <div className="font-font1 mb-12">
          <p className="text-lg leading-relaxed text-quais-gray">
            새로운 마음과 새 의미를 간직하며
            <br />
            저희 두 사람이 새 출발의{" "}
            <span className="font-semibold text-quasi-rose3">첫 걸음</span>을
            내딛습니다. <br />
            좋은 꿈, 바른 뜻으로 <br />
            올바르게 살 수 있도록{" "}
            <span className="font-semibold text-quasi-rose3">축복</span>과{" "}
            <span className="font-semibold text-quasi-rose3">격려</span>주시면
            <br />
            더없는 기쁨으로 간직하겠습니다.
          </p>
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/images/image10.jpg`}
          alt="wedding cover"
          className="w-full max-w-sm mx-auto mb-8 h-full max-h-64 object-cover object-center"
        />

        <FamilyInfo members={members} />

        <ButtonLayout openModal={openModal} text="연락하기" icon="phone" />
      </Layout>

      {/* 모달창 */}
      {isOpen && <ContactModal closeModal={closeModal} members={members} />}
    </>
  );
};

export default InvitationSection;
