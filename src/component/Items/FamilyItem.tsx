import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  color: string;
  index: number;
  member: {
    title: string;
    firstName: string;
    lastName: string;
    phone: string;
    bank: string;
  };
}

const FamilyItem: React.FC<Props> = ({ color, index, member }) => {
  return (
    <>
      <div
        key={index}
        className="w-full max-w-sm mx-auto grid grid-cols-3 mb-3"
      >
        <div className={`text-quasi-${color}`}>{member.title}</div>
        <div>
          {member.firstName}
          {member.lastName}
        </div>
        <ul className="flex gap-5 justify-center">
          <li className="cursor-pointer">
            <a href={`tel:${member.phone}`}>
              <img
                src={`${process.env.PUBLIC_URL}/icons/phone.svg`}
                className="w-4"
                alt="수화기 아이콘"
              />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href={`sms:${member.phone}`}>
              <img
                src={`${process.env.PUBLIC_URL}/icons/mail.svg`}
                className="w-4"
                alt="메세지 아이콘"
              />
            </a>
          </li>
          <li className="cursor-pointer">
            <CopyToClipboard text={member.bank}>
              <img
                src={`${process.env.PUBLIC_URL}/icons/credit-card.svg`}
                className="w-4"
                alt="계좌 아이콘"
              />
            </CopyToClipboard>
          </li>
        </ul>
      </div>

      {/* 계좌번호 복사 시 출력할 모달창 */}
      {/* {openModal && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-quasi-brown2 text-white text-sm py-2 px-4 rounded-md shadow-lg z-50 animate-fadeIn">
          계좌번호가 복사되었습니다.
        </div>
      )} */}
    </>
  );
};

export default FamilyItem;
