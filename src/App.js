import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import ExhibitionPage from "./pages/ExhibitionPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/exhibition" element={<ExhibitionPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
