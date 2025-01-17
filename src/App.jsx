
import './App.css'
import Card from './components/Card'

const App = () => {
  
  return (
    <main className="md:p-10 p-5">
      <h1 className="text-2xl font-semibold text-center">
        Berita Dunia Terkini
      </h1>
      <div className="mt-12 grid md:grid-cols-4 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

export default App
