// FriendsModal.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../redux/chatSlice";
import Conversations from "../ConversationScreens/Conversations";
import CloseIcon from "../svg/Close";
import ChatHeader from "../header/ChatHeader";
import SearchResults from "../Search/SearchResults";
import Search from "../Search/Search";

const FriendsModal = ({ onClose }) => {
  // You can fetch the list of friends and their details here
  const [searchResults, setSearchResults] = useState([]);

  console.log("sea", searchResults);
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
        className=" fixed inset-0 bg-black opacity-30"
        onClick={onClose}
      ></div>
      <div
        className="fixed bottom-0 right-4 p-4 mb-4 bg-white border border-gray-300 shadow-md
       w-full md:w-1/3 h-[80%] overflow-y-auto dark:bg-dark_bg_1  "
      >
        <button
          className="absolute top-1 right-2  text-lg font-bold mb-2 "
          onClick={onClose}
        >
          <CloseIcon className="text-gray-100" />
        </button>
        <div className=" mt-4">
          <ChatHeader />
          <Search
            searchLength={searchResults.length}
            setSearchResults={setSearchResults}
          />
        </div>
        <div className="mt-2">
          {searchResults.length > 0 ? (
            <SearchResults
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          ) : (
            <>
              {/* conversation */}
              <Conversations />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FriendsModal;
