import "./style.scss";
import { Link } from 'react-router-dom'

export default function LoginForm() {
  return (
    <div className="login-form modal">
        <h2 className="title">Entrar</h2>
        <form action="" className="global-form">
            <label className="label" htmlFor="loginEmail">E-mail</label>
            <input className="input" type="text" id="loginEmail" />
            <label className="label" htmlFor="loginPassword">Senha</label>
            <input className="input" type="text" id="loginPassword" />
            <input className="submit" type="submit" value="Entrar" />
        </form>
        <span className="separator"></span>
        <div className="signup-message">
          <p className="lead">Ainda não tem conta?</p>
          <Link to="/cadastro" className="cta">criar uma conta</Link>
        </div>
    </div>
  );
}
