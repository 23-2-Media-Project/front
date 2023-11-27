import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/common/Header";
import ContentsSection2 from "./components/monthlyExhibition/ContentsSection2";
import ExhibitionDetailPage from "./pages/ExhibitionDetailPage";
import ExhibitionPage from "./pages/ExhibitionPage";
import ExhibitionWritingPage from "./pages/ExhibitionWritingPage";
import MainPage from "./pages/MainPage";
import MonthlyExhibitionPage from "./pages/MonthlyExhibitionPage";
import MyPage from "./pages/MyPage";
import SignupPage from "./pages/SignupPage";
import StartingPage from "./pages/StartingPage";

function App() {
  let location = useLocation();

  // 이달의 전시회 헤더 적용 여부에 대한 state
  const [isShow, setShow] = useState(false);

  return (
    <>
      {location?.pathname !== "/" && location?.pathname !== "/monthly" && (
        <Header />
      )}
      {location?.pathname === "/monthly" && isShow && <Header />}
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/exhibition" element={<ExhibitionPage />} />
        <Route path="/monthly" element={<MonthlyExhibitionPage />} />
        <Route path="/monthly/list" element={<ContentsSection2 />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/writing" element={<ExhibitionWritingPage />} />
        <Route path="/detail" element={<ExhibitionDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
