import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="center">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}
