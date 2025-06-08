import React from 'react'
import '../assets/css/my-task.style.min.css'
const Help = () => {
  return (
    <div>
      {/* Mirrored from www.pixelwibes.com/template/my-task/html/dist/help.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 03 Aug 2022 04:33:32 GMT */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>:: My-Task:: Help</title>
      <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Favicon*/}
      {/* project css file  */}
      <link rel="stylesheet" href="assets/css/my-task.style.min.css" />
      <div id="mytask-layout" className="theme-indigo">
        {/* sidebar */}
        <div className="sidebar px-4 py-4 py-md-5 me-0">
          <div className="d-flex flex-column h-100">
            <a href="index.html" className="mb-0 brand-icon">
              <span className="logo-icon">
                <svg
                  width={35}
                  height={35}
                  fill="currentColor"
                  className="bi bi-clipboard-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
              </span>
              <span className="logo-text">My-Task</span>
            </a>
            {/* Menu: main ul */}
            <ul className="menu-list flex-grow-1 mt-3">
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#dashboard-Components"
                  href="#"
                >
                  <i className="icofont-home fs-5" /> <span>Dashboard</span>{" "}
                  <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                </a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="dashboard-Components">
                  <li>
                    <a className="ms-link" href="index.html">
                      {" "}
                      <span>Hr Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="project-dashboard.html">
                      {" "}
                      <span>Project Dashboard</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#project-Components"
                  href="#"
                >
                  <i className="icofont-briefcase" />
                  <span>Projects</span>{" "}
                  <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                </a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="project-Components">
                  <li>
                    <a className="ms-link" href="projects.html">
                      <span>Projects</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="task.html">
                      <span>Tasks</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="timesheet.html">
                      <span>Timesheet</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="team-leader.html">
                      <span>Leaders</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#tikit-Components"
                  href="#"
                >
                  <i className="icofont-ticket" /> <span>Tickets</span>{" "}
                  <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                </a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="tikit-Components">
                  <li>
                    <a className="ms-link" href="tickets.html">
                      {" "}
                      <span>Tickets View</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="ticket-detail.html">
                      {" "}
                      <span>Ticket Detail</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#client-Components"
                  href="#"
                >
                  <i className="icofont-user-male" /> <span>Our Clients</span>{" "}
                  <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                </a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="client-Components">
                  <li>
                    <a className="ms-link" href="ourclients.html">
                      {" "}
                      <span>Clients</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="profile.html">
                      {" "}
                      <span>Client Profile</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#emp-Components"
                  href="#"
                >
                  <i className="icofont-users-alt-5" /> <span>Employees</span>{" "}
                  <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                </a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="emp-Components">
                  <li>
                    <a className="ms-link" href="members.html">
                      {" "}
                      <span>Members</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="employee-profile.html">
                      {" "}
                      <span>Members Profile</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="holidays.html">
                      {" "}
                      <span>Holidays</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="attendance-employees.html">
                      {" "}
                      <span>Attendance Employees</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="attendance.html">
                      {" "}
                      <span>Attendance</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="leave-request.html">
                      {" "}
                      <span>Leave Request</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="department.html">
                      {" "}
                      <span>Department</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-Componentsone"
                  href="#"
                >
                  <i className="icofont-ui-calculator" /> <span>Accounts</span>{" "}
                  <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                </a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="menu-Componentsone">
                  <li>
                    <a className="ms-link" href="invoices.html">
                      <span>Invoices</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="payments.html">
                      <span>Payments</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="expenses.html">
                      <span>Expenses</span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#payroll-Components"
                  href="#"
                >
                  <i className="icofont-users-alt-5" /> <span>Payroll</span>{" "}
                  <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                </a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="payroll-Components">
                  <li>
                    <a className="ms-link" href="salaryslip.html">
                      <span>Employee Salary</span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#app-Components"
                  href="#"
                >
                  <i className="icofont-contrast" /> <span>App</span>{" "}
                  <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                </a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="app-Components">
                  <li>
                    <a className="ms-link" href="calendar.html">
                      {" "}
                      <span>Calander</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="chat.html">
                      <span>Chat App</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#extra-Components"
                  href="#"
                >
                  <i className="icofont-code-alt" /> <span>Other Pages</span>{" "}
                  <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                </a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="extra-Components">
                  <li>
                    <a className="ms-link" href="charts.html">
                      {" "}
                      <span>Apex Charts</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="forms.html">
                      <span>Forms Example</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="table.html">
                      {" "}
                      <span>Table Example</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="review.html">
                      <span>Reviews Page</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="icon.html">
                      <span>Icons</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="contact.html">
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="widgets.html">
                      <span>Widgets</span>
                    </a>
                  </li>
                  <li>
                    <a className="ms-link" href="todo-list.html">
                      <span>Todo-List</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="m-link" href="ui-elements/ui-alerts.html">
                  <i className="icofont-paint" /> <span>UI Components</span>
                </a>
              </li>
            </ul>
            {/* Theme: Switch Theme */}
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center justify-content-center">
                <div className="form-check form-switch theme-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="theme-switch"
                  />
                  <label className="form-check-label" htmlFor="theme-switch">
                    Enable Dark Mode!
                  </label>
                </div>
              </li>
              <li className="d-flex align-items-center justify-content-center">
                <div className="form-check form-switch theme-rtl">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="theme-rtl"
                  />
                  <label className="form-check-label" htmlFor="theme-rtl">
                    Enable RTL Mode!
                  </label>
                </div>
              </li>
            </ul>
            {/* Menu: menu collepce btn */}
            <button
              type="button"
              className="btn btn-link sidebar-mini-btn text-light"
            >
              <span className="ms-2">
                <i className="icofont-bubble-right" />
              </span>
            </button>
          </div>
        </div>
        {/* main body area */}
        <div className="main px-lg-4 px-md-4">
          {/* Body: Header */}
          <div className="header">
            <nav className="navbar py-4">
              <div className="container-xxl">
                {/* header rightbar icon */}
                <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                  <div className="d-flex">
                    <a
                      className="nav-link text-primary collapsed"
                      href="help.html"
                      title="Get Help"
                    >
                      <i className="icofont-info-square fs-5" />
                    </a>
                    <div className="avatar-list avatar-list-stacked px-3">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar2.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar1.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar3.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar4.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar7.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar8.jpg"
                        alt=""
                      />
                      <span
                        className="avatar rounded-circle text-center pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#addUser"
                      >
                        <i className="icofont-ui-add" />
                      </span>
                    </div>
                  </div>
                  <div className="dropdown notifications zindex-popover">
                    <a
                      className="nav-link dropdown-toggle pulse"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <i className="icofont-alarm fs-5" />
                      <span className="pulse-ring" />
                    </a>
                    <div
                      id="NotificationsDiv"
                      className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0"
                    >
                      <div className="card border-0 w380">
                        <div className="card-header border-0 p-3">
                          <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                            <span>Notifications</span>
                            <span className="badge text-white">11</span>
                          </h5>
                        </div>
                        <div className="tab-content card-body">
                          <div className="tab-pane fade show active">
                            <ul className="list-unstyled list mb-0">
                              <li className="py-2 mb-1 border-bottom">
                                <a
                                  href="javascript:void(0);"
                                  className="d-flex"
                                >
                                  <img
                                    className="avatar rounded-circle"
                                    src="assets/images/xs/avatar1.jpg"
                                    alt=""
                                  />
                                  <div className="flex-fill ms-2">
                                    <p className="d-flex justify-content-between mb-0 ">
                                      <span className="font-weight-bold">
                                        Dylan Hunter
                                      </span>{" "}
                                      <small>2MIN</small>
                                    </p>
                                    <span className>
                                      Added 2021-02-19 my-Task ui/ux Design{" "}
                                      <span className="badge bg-success">
                                        Review
                                      </span>
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li className="py-2 mb-1 border-bottom">
                                <a
                                  href="javascript:void(0);"
                                  className="d-flex"
                                >
                                  <div className="avatar rounded-circle no-thumbnail">
                                    DF
                                  </div>
                                  <div className="flex-fill ms-2">
                                    <p className="d-flex justify-content-between mb-0 ">
                                      <span className="font-weight-bold">
                                        Diane Fisher
                                      </span>{" "}
                                      <small>13MIN</small>
                                    </p>
                                    <span className>
                                      Task added Get Started with Fast Cad
                                      project
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li className="py-2 mb-1 border-bottom">
                                <a
                                  href="javascript:void(0);"
                                  className="d-flex"
                                >
                                  <img
                                    className="avatar rounded-circle"
                                    src="assets/images/xs/avatar3.jpg"
                                    alt=""
                                  />
                                  <div className="flex-fill ms-2">
                                    <p className="d-flex justify-content-between mb-0 ">
                                      <span className="font-weight-bold">
                                        Andrea Gill
                                      </span>{" "}
                                      <small>1HR</small>
                                    </p>
                                    <span className>
                                      Quality Assurance Task Completed
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li className="py-2 mb-1 border-bottom">
                                <a
                                  href="javascript:void(0);"
                                  className="d-flex"
                                >
                                  <img
                                    className="avatar rounded-circle"
                                    src="assets/images/xs/avatar5.jpg"
                                    alt=""
                                  />
                                  <div className="flex-fill ms-2">
                                    <p className="d-flex justify-content-between mb-0 ">
                                      <span className="font-weight-bold">
                                        Diane Fisher
                                      </span>{" "}
                                      <small>13MIN</small>
                                    </p>
                                    <span className>
                                      Add New Project for App Developemnt
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li className="py-2 mb-1 border-bottom">
                                <a
                                  href="javascript:void(0);"
                                  className="d-flex"
                                >
                                  <img
                                    className="avatar rounded-circle"
                                    src="assets/images/xs/avatar6.jpg"
                                    alt=""
                                  />
                                  <div className="flex-fill ms-2">
                                    <p className="d-flex justify-content-between mb-0 ">
                                      <span className="font-weight-bold">
                                        Andrea Gill
                                      </span>{" "}
                                      <small>1HR</small>
                                    </p>
                                    <span className>
                                      Add Timesheet For Rhinestone project
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li className="py-2">
                                <a
                                  href="javascript:void(0);"
                                  className="d-flex"
                                >
                                  <img
                                    className="avatar rounded-circle"
                                    src="assets/images/xs/avatar7.jpg"
                                    alt=""
                                  />
                                  <div className="flex-fill ms-2">
                                    <p className="d-flex justify-content-between mb-0 ">
                                      <span className="font-weight-bold">
                                        Zoe Wright
                                      </span>{" "}
                                      <small className>1DAY</small>
                                    </p>
                                    <span className>Add Calander Event</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <a
                          className="card-footer text-center border-top-0"
                          href="#"
                        >
                          {" "}
                          View all notifications
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                    <div className="u-info me-2">
                      <p className="mb-0 text-end line-height-sm ">
                        <span className="font-weight-bold">Dylan Hunter</span>
                      </p>
                      <small>Admin Profile</small>
                    </div>
                    <a
                      className="nav-link dropdown-toggle pulse p-0"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                    >
                      <img
                        className="avatar lg rounded-circle img-thumbnail"
                        src="assets/images/profile_av.png"
                        alt="profile"
                      />
                    </a>
                    <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                      <div className="card border-0 w280">
                        <div className="card-body pb-0">
                          <div className="d-flex py-1">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/profile_av.png"
                              alt="profile"
                            />
                            <div className="flex-fill ms-3">
                              <p className="mb-0">
                                <span className="font-weight-bold">
                                  Dylan Hunter
                                </span>
                              </p>
                              <small className>Dylan.hunter@gmail.com</small>
                            </div>
                          </div>
                          <div>
                            <hr className="dropdown-divider border-dark" />
                          </div>
                        </div>
                        <div className="list-group m-2 ">
                          <a
                            href="task.html"
                            className="list-group-item list-group-item-action border-0 "
                          >
                            <i className="icofont-tasks fs-5 me-3" />
                            My Task
                          </a>
                          <a
                            href="members.html"
                            className="list-group-item list-group-item-action border-0 "
                          >
                            <i className="icofont-ui-user-group fs-6 me-3" />
                            members
                          </a>
                          <a
                            href="ui-elements/auth-signin.html"
                            className="list-group-item list-group-item-action border-0 "
                          >
                            <i className="icofont-logout fs-6 me-3" />
                            Signout
                          </a>
                          <div>
                            <hr className="dropdown-divider border-dark" />
                          </div>
                          <a
                            href="ui-elements/auth-signup.html"
                            className="list-group-item list-group-item-action border-0 "
                          >
                            <i className="icofont-contact-add fs-5 me-3" />
                            Add personal account
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* menu toggler */}
                <button
                  className="navbar-toggler p-0 border-0 menu-toggle order-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mainHeader"
                >
                  <span className="fa fa-bars" />
                </button>
                {/* main menu Search*/}
                <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                  <div className="input-group flex-nowrap input-group-lg">
                    <button
                      type="button"
                      className="input-group-text"
                      id="addon-wrapping"
                    >
                      <i className="fa fa-search" />
                    </button>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                      aria-label="search"
                      aria-describedby="addon-wrapping"
                    />
                    <button
                      type="button"
                      className="input-group-text add-member-top"
                      id="addon-wrappingone"
                      data-bs-toggle="modal"
                      data-bs-target="#addUser"
                    >
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Body: Body */}
          <div className="body d-flex py-lg-3 py-md-2">
            <div className="container-xxl">
              <div className="row clearfix">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 flex-lg-column">
                  <div className="sticky-lg-top">
                    <div className="row row-deck">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-12 flex-column">
                        <div className="card mb-3 bg-info-light ">
                          <div className="card-body d-flex align-items-center justify-content-center flex-column">
                            <div className="preview-pane text-center">
                              <svg
                                width={100}
                                fill="currentColor"
                                className="bi bi-chat-text color-defult "
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              <a
                                href="http://pixelwibes.com/"
                                target="_blank"
                                className="fw-bold fs-6 mt-2 d-flex justify-content-center color-defult "
                              >
                                Chat with us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-12 flex-column">
                        <div className="card mb-3 bg-lightyellow">
                          <div className="card-body d-flex align-items-center justify-content-center flex-column">
                            <div className="preview-pane text-center">
                              <svg
                                width={100}
                                fill="currentColor"
                                className="bi bi-envelope color-defult "
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                              </svg>
                              <a
                                href="mailto:pixelwibes@gmail.com"
                                className="fw-bold  fs-6 mt-2 d-flex justify-content-center color-defult "
                              >
                                Email us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12">
                  <div className="card border-0">
                    <div className="card-header py-3">
                      <h4 className=" display-6 fw-bold">Help</h4>
                    </div>
                    <div className="card-body">
                      <div className="mb-4 overflow-hidden">
                        <div className="bg-primary py-5 px-4 text-light">
                          <h4>pixelwibes.com</h4>
                          <span>Quick Start Guides Help Center</span>
                        </div>
                        <div className="p-4">
                          <p className="fw-bold">My-Task guide</p>
                          <span>
                            Get started with My-Task Business and learn about
                            features for admins and users.
                          </span>
                          <div className="mt-4 mb-2">
                            <a
                              href="http://pixelwibes.com/"
                              className="btn btn-primary"
                              target="_blank"
                            >
                              Check out the guide
                            </a>
                          </div>
                          <hr />
                          <p className="fw-bold">Get answers</p>
                          <span>
                            Visit the help centre for answers to common issues.
                          </span>
                          <div className="mt-4 mb-2">
                            <a
                              href="http://pixelwibes.com/"
                              className="btn btn-primary"
                              target="_blank"
                            >
                              Go to Help Centre
                            </a>
                          </div>
                          <hr />
                          <span className="text-muted">
                            Thanks for choosing{" "}
                            <strong className="text-warning">
                              Pixel Wibes
                            </strong>{" "}
                            Admin.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row End */}
            </div>
          </div>
          {/* Modal Members*/}
          <div
            className="modal fade"
            id="addUser"
            tabIndex={-1}
            aria-labelledby="addUserLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title  fw-bold" id="addUserLabel">
                    Employee Invitation
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="inviteby_email">
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        id="exampleInputEmail1"
                        aria-describedby="exampleInputEmail1"
                      />
                      <button
                        className="btn btn-dark"
                        type="button"
                        id="button-addon2"
                      >
                        Sent
                      </button>
                    </div>
                  </div>
                  <div className="members_list">
                    <h6 className="fw-bold ">Employee </h6>
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                      <li className="list-group-item py-3 text-center text-md-start">
                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                          <div className="no-thumbnail mb-2 mb-md-0">
                            <img
                              className="avatar lg rounded-circle"
                              src="assets/images/xs/avatar2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                            <span className="text-muted">
                              rachel.carr@gmail.com
                            </span>
                          </div>
                          <div className="members-action">
                            <span className="members-role ">Admin</span>
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn bg-transparent dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="icofont-ui-settings  fs-6" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-ui-password fs-6 me-2" />
                                    ResetPassword
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-chart-line fs-6 me-2" />
                                    ActivityReport
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item py-3 text-center text-md-start">
                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                          <div className="no-thumbnail mb-2 mb-md-0">
                            <img
                              className="avatar lg rounded-circle"
                              src="assets/images/xs/avatar3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="mb-0  fw-bold">
                              Lucas Baker
                              <a href="#" className="link-secondary ms-2">
                                (Resend invitation)
                              </a>
                            </h6>
                            <span className="text-muted">
                              lucas.baker@gmail.com
                            </span>
                          </div>
                          <div className="members-action">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn bg-transparent dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Members
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-check-circled" />
                                    <span>All operations permission</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="fs-6 p-2 me-1" />
                                    <span>Only Invite &amp; manage team</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn bg-transparent dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="icofont-ui-settings  fs-6" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-delete-alt fs-6 me-2" />
                                    Delete Member
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item py-3 text-center text-md-start">
                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                          <div className="no-thumbnail mb-2 mb-md-0">
                            <img
                              className="avatar lg rounded-circle"
                              src="assets/images/xs/avatar8.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="mb-0  fw-bold">Una Coleman</h6>
                            <span className="text-muted">
                              una.coleman@gmail.com
                            </span>
                          </div>
                          <div className="members-action">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn bg-transparent dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Members
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-check-circled" />
                                    <span>All operations permission</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="fs-6 p-2 me-1" />
                                    <span>Only Invite &amp; manage team</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="btn-group">
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn bg-transparent dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="icofont-ui-settings  fs-6" />
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="icofont-ui-password fs-6 me-2" />
                                      ResetPassword
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="icofont-chart-line fs-6 me-2" />
                                      ActivityReport
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="icofont-delete-alt fs-6 me-2" />
                                      Suspend member
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="icofont-not-allowed fs-6 me-2" />
                                      Delete Member
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Jquery Core Js */}
      {/* Jquery Page Js */}
      {/* Mirrored from www.pixelwibes.com/template/my-task/html/dist/help.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 03 Aug 2022 04:33:32 GMT */}
    </div>
  );
}

export default Help