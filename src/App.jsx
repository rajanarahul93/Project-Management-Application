import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import Help from "./pages/Help";

const Layout = () => {
  return (
    <div id="mytask-layout" className="theme-indigo">
      <NavBar />
      <Sidebar />
      <div className="main px-4 py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
