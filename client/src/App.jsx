import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Service from "./Component/Service";
import Pricing from "./Component/Pricing";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Recovery from "./Component/Recovery";
import ResetPassword from "./Component/ResetPassword";
import { useState } from "react";
import EnterEmail from "./Component/EmailEnter";
import { Toaster } from "react-hot-toast";
import DashBoard from "./Component/DashBoard";
import ErrorPage from "./Component/Error";
import Profile from "./Component/Profile";
import MeetingPage from "./Component/MeetingPage";
import HelpPage from "./Component/HelpPage";
import SettingPage from "./Component/SettingPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>
          <Route path="service" element={<Service />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route
            path={isLoggedIn ? "dashboard" : "*"}
            element={isLoggedIn ? <DashBoard /> : <ErrorPage />}
          >
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/meeting" element={<MeetingPage />} />
            <Route path="/dashboard/setting" element={<SettingPage />} />
            <Route path="/dashboard/help" element={<HelpPage />} />
          </Route>
          <Route index={true} element={<Home />} />
          <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />}>
            <Route path="/login/enter_email" element={<EnterEmail />} />

            <Route path="/login/recovery" element={<Recovery />}>
              <Route
                path="/login/recovery/resetpassword"
                element={<ResetPassword />}
              />
            </Route>
          </Route>
          <Route
            path="register"
            element={<Register setIsLoggedIn={setIsLoggedIn} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
