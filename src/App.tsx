import { MemoryRouter, Route, Routes } from "react-router"
import LandingComponets from "./components/LandingComponets"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<LandingComponets />} />
      </Routes>
    </MemoryRouter>
  )
}

export default App
