import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NewTrainingPage from './pages/NewTrainingPage'
import './App.css'

import TrainingsProvider from './TrainingsProvider'

function App() {

  return (
    <>
      <TrainingsProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new-training' element={<NewTrainingPage />} />
          </Routes>
        </Router>
      </TrainingsProvider>
    </>
  )
}

export default App