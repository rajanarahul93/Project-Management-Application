import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

const Sidebar = () => {
  const location = useLocation();

  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isTicketOpen, setTicketOpen] = useState(false);
  const [isClientOpen, setClientOpen] = useState(false);
  const [isEmpOpen, setEmpOpen] = useState(false);
  const [isAccountsOpen, setAccountsOpen] = useState(false);
  const [isPayrollOpen, setPayrollOpen] = useState(false);
  const [isAppOpen, setAppOpen] = useState(false);
  const [isExtraOpen, setExtraOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    setDashboardOpen(
      path.includes("/index") || path.includes("/project-dashboard")
    );
    setProjectOpen(
      path.includes("/projects") ||
        path.includes("/task") ||
        path.includes("/timesheet")
    );
    setTicketOpen(path.includes("/tickets"));
    setClientOpen(path.includes("/clients"));
    setEmpOpen(path.includes("/employees"));
    setAccountsOpen(path.includes("/accounts"));
    setPayrollOpen(path.includes("/payroll"));
    setAppOpen(path.includes("/apps"));
    setExtraOpen(path.includes("/extra"));
  }, [location.pathname]);

  return (
    <div className="sidebar px-4 py-4 py-md-5 me-0">
      <div className="d-flex flex-column h-100">
        <Link to="/index" className="mb-0 brand-icon">
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
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3z" />
            </svg>
          </span>
          <span className="logo-text">My-Task</span>
        </Link>

        <ul className="menu-list flex-grow-1 mt-3">
          <li className={isDashboardOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isDashboardOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setDashboardOpen(!isDashboardOpen);
              }}
              href="#"
            >
              <i className="icofont-home fs-5" />
              <span>Dashboard</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul
              className={`sub-menu collapse ${isDashboardOpen ? "show" : ""}`}
            >
              <li>
                <Link className="ms-link" to="/index">
                  <span>Hr Dashboard</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/project-dashboard">
                  <span>Project Dashboard</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={isProjectOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isProjectOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setProjectOpen(!isProjectOpen);
              }}
              href="#"
            >
              <i className="icofont-briefcase" />
              <span>Projects</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul className={`sub-menu collapse ${isProjectOpen ? "show" : ""}`}>
              <li>
                <Link className="ms-link" to="/projects">
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/task">
                  <span>Tasks</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/timesheet">
                  <span>Timesheet</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={isTicketOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isTicketOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setTicketOpen(!isTicketOpen);
              }}
              href="#"
            >
              <i className="icofont-ticket" />
              <span>Tickets</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul className={`sub-menu collapse ${isTicketOpen ? "show" : ""}`}>
              <li>
                <Link className="ms-link" to="/tickets">
                  <span>All Tickets</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/tickets/create">
                  <span>Create Ticket</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={isClientOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isClientOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setClientOpen(!isClientOpen);
              }}
              href="#"
            >
              <i className="icofont-users-alt-2" />
              <span>Clients</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul className={`sub-menu collapse ${isClientOpen ? "show" : ""}`}>
              <li>
                <Link className="ms-link" to="/clients">
                  <span>All Clients</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/clients/create">
                  <span>Create Client</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={isEmpOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isEmpOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setEmpOpen(!isEmpOpen);
              }}
              href="#"
            >
              <i className="icofont-users-alt-3" />
              <span>Employees</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul className={`sub-menu collapse ${isEmpOpen ? "show" : ""}`}>
              <li>
                <Link className="ms-link" to="/employees">
                  <span>All Employees</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/employees/create">
                  <span>Create Employee</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={isAccountsOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isAccountsOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setAccountsOpen(!isAccountsOpen);
              }}
              href="#"
            >
              <i className="icofont-bank" />
              <span>Accounts</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul className={`sub-menu collapse ${isAccountsOpen ? "show" : ""}`}>
              <li>
                <Link className="ms-link" to="/accounts">
                  <span>All Accounts</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/accounts/create">
                  <span>Create Account</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={isPayrollOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isPayrollOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setPayrollOpen(!isPayrollOpen);
              }}
              href="#"
            >
              <i className="icofont-pay" />
              <span>Payroll</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul className={`sub-menu collapse ${isPayrollOpen ? "show" : ""}`}>
              <li>
                <Link className="ms-link" to="/payroll">
                  <span>All Payrolls</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/payroll/create">
                  <span>Create Payroll</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={isAppOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isAppOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setAppOpen(!isAppOpen);
              }}
              href="#"
            >
              <i className="icofont-layers" />
              <span>Apps</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul className={`sub-menu collapse ${isAppOpen ? "show" : ""}`}>
              <li>
                <Link className="ms-link" to="/apps">
                  <span>All Apps</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/apps/create">
                  <span>Create App</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={isExtraOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isExtraOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setExtraOpen(!isExtraOpen);
              }}
              href="#"
            >
              <i className="icofont-extra" />
              <span>Extras</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul className={`sub-menu collapse ${isExtraOpen ? "show" : ""}`}>
              <li>
                <Link className="ms-link" to="/extra">
                  <span>All Extras</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/extra/create">
                  <span>Create Extra</span>
                </Link>
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
  );
};

export default Sidebar;
