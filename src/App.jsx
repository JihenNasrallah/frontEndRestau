import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Router from "./routes/route"
import './App.css'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Router />
      <footer >
        <Footer />
      </footer>
    </>
  )
}

export default App
