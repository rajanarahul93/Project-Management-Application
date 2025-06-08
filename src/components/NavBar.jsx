import React, { useState } from "react";
import '../assets/css/my-task.style.min.css'
import avatar1 from "../assets/images/xs/avatar1.jpg";
import avatar2 from "../assets/images/xs/avatar2.jpg";
import avatar3 from "../assets/images/xs/avatar3.jpg";
import avatar4 from "../assets/images/xs/avatar4.jpg";
import avatar7 from "../assets/images/xs/avatar7.jpg";
import avatar8 from "../assets/images/xs/avatar8.jpg";
import logo from "../assets/images/profile_av.png"
import { Link } from "react-router-dom";


export default function NavBar() {
  // Toggle functions

  return (
    <nav className="navbar py-4 bg-light">
      <div className="navbar-search">
        <input className="form-control" type="text" placeholder="Search" />
      </div>
      <div className="container-xxl">
        {/* Rightbar icons */}
        <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
          <div className="d-flex align-items-center">
            <Link
              className="nav-link text-primary collapsed"
              to='/help'
              title="Get Help"
            >
              <i className="icofont-info-square fs-5"></i>
            </Link>

            <div className="avatar-list avatar-list-stacked px-3 d-flex align-items-center">
              <img
                className="avatar rounded-circle"
                src={avatar2}
                alt="avatar"
              />
              <img
                className="avatar rounded-circle"
                src={avatar1}
                alt="avatar"
              />
              <img
                className="avatar rounded-circle"
                src={avatar3}
                alt="avatar"
              />
              <img
                className="avatar rounded-circle"
                src={avatar4}
                alt="avatar"
              />
              <img
                className="avatar rounded-circle"
                src={avatar7}
                alt="avatar"
              />
              <img
                className="avatar rounded-circle"
                src={avatar8}
                alt="avatar"
              />
              <span
                className="avatar rounded-circle text-center pointer"
                data-bs-toggle="modal"
                data-bs-target="#addUser"
              >
                <i className="icofont-ui-add"></i>
              </span>
            </div>
          </div>

          {/* Notifications Dropdown */}
          <div className="dropdown notifications zindex-popover ms-3 position-relative">
            <a
              className="nav-link dropdown-toggle pulse"
              href="#"
              role="button"
            >
              <i className="icofont-alarm fs-5"></i>
              <span className="pulse-ring"></span>
            </a>
          </div>

          {/* User Profile Dropdown */}
          <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover ms-3 position-relative">
            <div className="u-info me-2 text-end line-height-sm">
              <p className="mb-0">
                <span className="fw-bold">Dylan Hunter</span>
              </p>
              <small>Admin Profile</small>
            </div>
            <a
              className="nav-link dropdown-toggle pulse p-0"
              href="#"
              role="button"
            >
              <img
                className="avatar lg rounded-circle img-thumbnail"
                src={logo}
                alt="profile"
              />
            </a>


          </div>
        </div>
      </div>
    </nav>
  );
}