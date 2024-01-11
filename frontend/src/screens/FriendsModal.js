// FriendsModal.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../redux/chatSlice";
import Conversations from "../ConversationScreens/Conversations";

const FriendsModal = ({ onClose }) => {
  // You can fetch the list of friends and their details here

  const { conversations } = useSelector((state) => state.chat);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  console.log(conversations);

  useEffect(() => {
    if (userInfo) {
      dispatch(getConversations());
    }
  }, [dispatch]);

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-30"
        onClick={onClose}
      ></div>
      <div
        className="fixed bottom-0 right-4 p-4 mb-4 bg-white border border-gray-300 shadow-md
       w-full md:w-1/3 h-[80%] overflow-y-auto dark:bg-dark_bg_1  "
      >
        <button
          className="absolute top-2 right-2 text-gray-800 text-lg font-bold"
          onClick={onClose}
        >
          Close
        </button>
        <div className="flex items-center  justify-between mt-4">
          <h2 className="text-lg font-bold mb-4">Friends List</h2>
          <div>Search ENGINE</div>
        </div>
        {/* <div className="fixed inset-1 bg-black opacity-30"></div> */}
        <div>
          <Conversations />
        </div>
      </div>
    </>
  );
};

export default FriendsModal;
