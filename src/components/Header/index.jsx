import "./style.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  function handleLogoff() {
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className="header">
      <Link to="/dashboard" className="link">
        <h1 className="title">Kista</h1>
      </Link>
      <div className="controls">
        <span className="email">{email}</span>

        {localStorage.getItem(email) ? (
          <>
            <span className="separator"></span>
            <button className="logoff" onClick={handleLogoff}>
              Sair
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
