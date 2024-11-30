import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/Homepage"
import Footer from "./components/Footer"

function App() {

  return (
   <div className="mt-5">
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>

    <Footer/>

   </div>
  )
}

export default App
