import Card from "./Card"
import Footer from "./Footer"
import Header from "./Header"

function App() {

  return (
    <>
      <Header />
      <div className="d-flex gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default App
