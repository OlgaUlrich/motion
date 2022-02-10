import Posts from "./Posts";
import Login from "./Login";
import Profile from "./Profile";
import FindFriends from "./FindFriends";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from "./style/global";

function App() {
  return (

    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/find-friends" element={<FindFriends />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
