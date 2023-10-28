import './App.css'
import { Route,Routes } from 'react-router-dom'
import MainRoot from './root/MainRoot'

import MainPage from './pages/MainPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainRoot/>}>

        <Route path='/' element={<MainPage/>}/>

      </Route>
    </Routes>
  )
}

export default App
