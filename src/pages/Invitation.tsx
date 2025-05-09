import React from "react";
import MainSection from "../component/Section/MainSection";
import InvitationSection from "../component/Section/InvitationSection";
import GallerySection from "../component/Section/GallerySection";
import CalendarSection from "../component/Section/CalendarSection";
import LocationSection from "../component/Section/LocationSection";
import GuestBookSection from "../component/Section/GuestBookSection";

const memberData = [
  {
    title: "신랑",
    firstName: "김",
    lastName: "민준",
    phone: "010-1234-1234",
    bank: "110-123-456789",
  },
  {
    title: "신랑 아버지",
    firstName: "김",
    lastName: "병철",
    phone: "010-3412-3412",
    bank: "110-231-789456",
  },
  {
    title: "신랑 어머니",
    firstName: "권",
    lastName: "정희",
    phone: "010-4321-4321",
    bank: "110-321-987654",
  },
  {
    title: "신부",
    firstName: "이",
    lastName: "서연",
    phone: "010-5678-5678",
    bank: "110-111-123456",
  },
  {
    title: "신부 아버지",
    firstName: "이",
    lastName: "종수",
    phone: "010-7856-7856",
    bank: "110-222-678912",
  },
  {
    title: "신부 어머니",
    firstName: "박",
    lastName: "미영",
    phone: "010-8765-8765",
    bank: "110-33-891234",
  },
];

const brideAndGroom = {
  groomFirstName: memberData[0].firstName,
  groomLastName: memberData[0].lastName,
  brideFirstName: memberData[3].firstName,
  brideLastName: memberData[3].lastName,
};

const dateData = {
  date1: "2025년 6월 22일",
  date2: "2025. 6. 22",
  date3: "25. 06. 22",
  day1: "Sunday",
  day2: "일요일",
  day3: "(일)",
  time1: "14:00",
  time2: "오후 2시 00분",
  location: "서울특별시 강남구 학동로 519 : 빌라드지디 청담",
};

const Invitation: React.FC = () => {
  return (
    <>
      <div
        className="font-Apple text-quasi-black mx-auto bg-white min-h-screen p-6 pt-16 text-center
        lg:p-20
        "
      >
        <MainSection brideAndGroom={brideAndGroom} dateData={dateData} />
        <InvitationSection members={memberData} />
        <CalendarSection brideAndGroom={brideAndGroom} dateData={dateData} />
        <GallerySection />
        <LocationSection />
        <GuestBookSection />
      </div>
    </>
  );
};

export default Invitation;
