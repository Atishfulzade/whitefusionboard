import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
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
import Profile from "./Component/Profile";
import EnterEmail from "./Component/EmailEnter";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Profile /> : <Layout />}>
          <Route path="service" element={<Service />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<Error />} />
          <Route index={true} element={<Home />} />
          <Route path="login" element={<Login />}>
            <Route path="/login/enter_email" element={<EnterEmail />} />

            <Route path="/login/recovery" element={<Recovery />}>
              <Route
                path="/login/recovery/resetpassword"
                element={<ResetPassword />}
              />
            </Route>
          </Route>
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
