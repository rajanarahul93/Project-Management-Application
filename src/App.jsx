import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";

const Layout = () => {
  return (
    <div id="mytask-layout" className="theme-indigo">
      <NavBar />
      <Sidebar />
      <div className="main px-4 py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
