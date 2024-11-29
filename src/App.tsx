import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/Homepage"

function App() {

  return (
   <div className="mx-10 mt-5">
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>

   </div>
  )
}

export default App
