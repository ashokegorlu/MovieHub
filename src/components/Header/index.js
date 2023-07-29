import { Link } from "react-router-dom";
import "./index.css";

export const Header = (props) => {
  const onClickLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/signup";
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <Link to="/">
            <h1 className="text-dark fw-bold movie">Movie list</h1>
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/Company-info" className="nav-link">
                CompanyInfo
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
