import "./style.scss";
import { Link } from 'react-router-dom'

export default function SignupForm() {
  return (
    <div className="signup-form modal">
        <h2 className="title">Cadastro</h2>
        <form action="" className="global-form">
            <label className="label" htmlFor="signupEmail">E-mail</label>
            <input className="input" type="text" id="signupEmail" />
            <label className="label" htmlFor="signupPassword">Senha</label>
            <input className="input" type="text" id="signupPassword" />
            <label className="label" htmlFor="signupPasswordConfirm">Confirmação de senha</label>
            <input className="input" type="text" id="signupPasswordConfirm" />
            <input className="submit" type="submit" value="Cadastrar" />
        </form>
        <span className="separator"></span>
        <div className="signup-message">
          <p className="lead">Já tem um conta?</p>
          <Link to="/login" className="cta">entrar</Link>
        </div>
    </div>
  );
}
