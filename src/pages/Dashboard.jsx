import Header from '../components/Header'
import Lists from '../components/ListsDisplay'
import CheckAuth from '../lib/Auth'

export default function Dashboard() {
    return (
        <>
        <CheckAuth />
        <Header />
        <main className="top-center">
          <Lists />
        </main>
      </>
    )
}