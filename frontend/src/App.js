import ChatButton from "./components/ChatButton";
import CreatePostButton from "./components/TweatButton";
import Header from "./header/Header";
import LoginScreen from "./screenUser/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import PostDetails from "./screens/posts/PostDetails";
import Navigation from "./sidebar/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="dark">
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/post/:id" exact element={<PostDetails />} />
          <Route path="/login" exact element={<LoginScreen />} />
        </Routes>
        <div className="flex items-center space-x-4">
          <CreatePostButton />

          <ChatButton />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
