import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainn from './Mainn';
import Chain from './components/Chain';
import WalletSpae from './components/WalletSpae';
function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Mainn/>}/>
          <Route path='/solana' element={<Chain chain={'solana'}/>} />
          <Route path='/ethereum' element={<Chain chain={'ethereum'}/>} />
          <Route path='/wallet' element={<WalletSpae />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
