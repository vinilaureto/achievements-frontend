import Header from '../components/Header'
import Lists from '../components/ListsDisplay'

export default function Dashboard() {
    return (
        <>
        <Header />
        <main className="top-center">
          <Lists />
        </main>
      </>
    )
}