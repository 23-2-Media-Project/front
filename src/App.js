import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/common/Header";
import StartingPage from "./pages/StartingPage";
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import MonthlyExhibitionPage from "./pages/MonthlyExhibitionPage";
import ExhibitionPage from "./pages/ExhibitionPage";
import MyPage from "./pages/MyPage";
import ExhibitionWritingPage from "./pages/ExhibitionWritingPage";

function App() {
  let location = useLocation();
  console.log(location);
  return (
    <>
      {location?.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/exhibition" element={<ExhibitionPage />} />
        <Route path="/mothly" element={<MonthlyExhibitionPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/writing" element={<ExhibitionWritingPage />} />
      </Routes>
    </>
  );
}

export default App;
