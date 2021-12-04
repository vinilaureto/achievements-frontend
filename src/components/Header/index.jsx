import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()
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

        {localStorage.getItem('email') ? (
          <>
            <span className="separator"></span>
            <button className="logoff" onClick={handleLogoff}>
              {t('Sair')}
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
