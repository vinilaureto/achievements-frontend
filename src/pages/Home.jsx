import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="center">
        <LoginForm />
      </main>
    </>
  );
}
