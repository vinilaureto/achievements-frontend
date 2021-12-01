import "./style.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">Kista</h1>
      <div className="controls">
        <span className="email">vinilaureto@gmail.com</span>
        <span className="separator"></span>
        <button className="logoff">Sair</button>
      </div>
    </header>
  );
}
