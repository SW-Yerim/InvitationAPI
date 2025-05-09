import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// 방명록 메시지 추가
export const addMessage = async (name: string, message: string) => {
  try {
    await addDoc(collection(db, "guestbook"), {
      name,
      message,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("오류 발생:", error);
  }
};

// 방명록 메시지 가져오기
export const getMessages = async () => {
  const querySnapshot = await getDocs(collection(db, "guestbook"));

  const messages = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return messages;
};
