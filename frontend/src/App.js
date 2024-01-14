import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { io } from "socket.io-client";
import SocketContext from "./Context/SocketContext";
import Home from "./screens/HomeScreen";
import ChatScreen from "./ChatScreens/ChatScreen";
import ChatButton from "./components/ChatButton";
import CreatePostButton from "./components/TweatButton";
import Header from "./header/Header";
import LoginScreen from "./screenUser/LoginScreen";
import FriendsModal from "./screens/FriendsModal";
import PostDetails from "./screens/posts/PostDetails";
import Navigation from "./sidebar/Navigation";
import { useEffect } from "react";

const socket = io(process.env.REACT_APP_API_ENDPOINT);

function App() {
  // const sendMessage = (message) => {
  //   // Emit a 'message' event to the server
  //   socket.emit("message", { content: message });
  // };

  // useEffect(() => {
  //   // Listen for incoming messages from the server
  //   socket.on("message", (data) => {
  //     console.log("Received message:", data);
  //     // Handle the received message as needed
  //   });

  //   // Clean up event listeners when the component unmounts
  //   return () => {
  //     socket.off("message");
  //   };
  // }, []);
  return (
    <div className="dark">
      <SocketContext.Provider value={socket}>
        <Router>
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home socket={socket} />} />
            {/* <Route path="/chatsscreen" element={<HomeScreen />} /> */}

            <Route path="/post/:id" exact element={<PostDetails />} />
            <Route path="/login" exact element={<LoginScreen />} />
          </Routes>
          <div className="flex items-center space-x-4">
            <CreatePostButton />

            <ChatButton />
          </div>
        </Router>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
