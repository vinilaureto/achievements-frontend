import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await axios.post("http://localhost:5000/auth", {
      email,
      password,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("email", email);
      navigate("/dashboard");
    }
  }

  return (
    <div className="login-form modal">
      <h2 className="title">{t("Entrar")}</h2>
      <form onSubmit={(e) => handleLogin(e)} className="global-form">
        <label className="label" htmlFor="loginEmail">
          E-mail
        </label>
        <input className="input" type="email" id="loginEmail" required />
        <label className="label" htmlFor="loginPassword">
          {t("Senha")}
        </label>
        <input className="input" type="password" id="loginPassword" required />
        <input className="submit" type="submit" value={t("Entrar")} />
      </form>
      <span className="separator"></span>
      <div className="signup-message">
        <p className="lead">{t("Ainda não tem conta?")}</p>
        <Link to="/cadastro" className="cta">
          {t("criar uma conta")}
        </Link>
      </div>
    </div>
  );
}
