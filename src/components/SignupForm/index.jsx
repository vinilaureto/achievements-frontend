import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function SignupForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  async function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    const response = await axios.post("http://localhost:5000/users", {
      fullname: name,
      email,
      password,
    });
    if (response.status === 200) {
      alert("Usuário criado com sucesso");
      navigate("/login");
    }
  }

  return (
    <div className="signup-form modal">
      <h2 className="title">{t("Cadastro")}</h2>
      <form onSubmit={(e) => handleSignup(e)} className="global-form">
        <label className="label" htmlFor="signupName">
          {t("Nome completo")}
        </label>
        <input className="input" required type="text" id="signupName" />
        <label className="label" htmlFor="signupEmail">
          E-mail
        </label>
        <input className="input" required type="email" id="signupEmail" />
        <label className="label" htmlFor="signupPassword">
          {t("Senha")}
        </label>
        <input className="input" required type="password" id="signupPassword" />
        <input className="submit" type="submit" value={t("Cadastrar")} />
      </form>
      <span className="separator"></span>
      <div className="signup-message">
        <p className="lead">{t("Já tem uma conta?")}</p>
        <Link to="/login" className="cta">
          {t("entrar")}
        </Link>
      </div>
    </div>
  );
}
