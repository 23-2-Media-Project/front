import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
}

export default App;
