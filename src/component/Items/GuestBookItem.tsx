import React, { useState } from "react";

interface Props {
  openModal: any;
  messages: { name: string; createdAt: string; message: string }[];
}

const ITEMS_PER_PAGE = 5;

const GuestBookItem: React.FC<Props> = ({ openModal, messages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(messages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMessages = messages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div>
      <ul className="w-full mx-auto">
        {currentMessages.map((message: any) => (
          <li
            key={message.id}
            className="w-full mb-4 p-5 bg-quasi-brown1 bg-opacity-25 rounded-xl shadow-md cursor-pointer"
            onClick={() => openModal(message)}
          >
            <div className="flex gap-4 justify-between items-center mb-4">
              <p className="font-semibold">{message.name}</p>
              <p>
                {message.createdAt
                  ? new Date(message.createdAt.seconds * 1000).toLocaleString()
                  : ""}
              </p>
            </div>
            <p className="w-full text-left">
              {message.message.length > 100
                ? message.message.slice(0, 100) + "..."
                : message.message}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded border text-sm ${
              currentPage === i + 1
                ? "bg-quasi-brown2 text-white border-quasi-brown2"
                : "bg-white text-quasi-brown2 border-quasi-brown2"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GuestBookItem;
