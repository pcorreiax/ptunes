import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/Login/index'
import SignupPage from './Pages/SignupPage'
import MainContent from './Pages/MainContent'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/main' element={<MainContent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;