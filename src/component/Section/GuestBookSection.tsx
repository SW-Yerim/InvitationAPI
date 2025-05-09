import React, { useEffect, useState } from "react";
import ContentTitle from "../common/ContentTitle";
import GuestBookForm from "../Modal/GuestBookForm";
import { getMessages } from "../../utils/guestbook";
import Layout from "../common/Layout";
import GuestBookModal from "../Modal/GuestBookModal";
import ButtonLayout from "../common/ButtonLayout";
import GuestBookItem from "../Items/GuestBookItem";

const GuestBookSection: React.FC = () => {
  // 방명록 출력
  const [messages, setMessages] = useState<any[]>([]);

  const fetchMessages = async () => {
    const msgs = await getMessages();
    setMessages(msgs);
  };

  useEffect(() => {
    getMessages().then((messages) => {
      setMessages(messages);
    });
  }, []);

  // 새로운 방명록 등록
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [guestBookContent, setGuestBookContent] = useState();

  const openModal = (item: any) => {
    setIsOpenModal(true);
    setGuestBookContent(item);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const [isOpenForm, setIsOpenForm] = useState(false);
  const openForm = () => {
    setIsOpenForm(true);
  };
  const closeForm = () => {
    setIsOpenForm(false);
  };

  return (
    <>
      <Layout>
        {/* 제목 영역 */}
        <ContentTitle title="GuestBook" text="방명록" />

        {/* 컨텐츠 영역 */}
        <div className="mb-12 text-sm">
          {messages.length === 0 ? (
            <p>등록된 방명록이 없습니다.</p>
          ) : (
            <GuestBookItem openModal={openModal} messages={messages} />
          )}
        </div>

        <ButtonLayout openModal={openForm} text="방명록 등록" />
      </Layout>

      {/* 등록된 방명록 출력 모달 */}
      {isOpenModal && (
        <GuestBookModal
          message={guestBookContent}
          closeModal={() => closeModal()}
        />
      )}

      {/* 새로운 방명록 등록 모달 */}
      {isOpenForm && (
        <GuestBookForm
          closeModal={() => closeForm()}
          refreshMessages={fetchMessages}
        />
      )}
    </>
  );
};

export default GuestBookSection;
