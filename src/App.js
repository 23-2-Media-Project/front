import { Route, Routes, useLocation } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import ExhibitionPage from "./pages/ExhibitionPage";
import MyPage from "./pages/MyPage";
import StartingPage from "./pages/StartingPage";
import Header from "./components/common/Header";

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
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
