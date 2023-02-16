import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/Login/index'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;