import CreatePostButton from "./components/TweatButton";
import Header from "./header/Header";
import LoginScreen from "./screenUser/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Navigation from "./sidebar/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" exact element={<LoginScreen />} />
        </Routes>
        <CreatePostButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
