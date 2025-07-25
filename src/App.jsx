import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css'

import Pagina1 from './pages/pagina1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pagina1 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
