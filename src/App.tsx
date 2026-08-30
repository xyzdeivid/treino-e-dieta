import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NewTrainingPage from './pages/NewTrainingPage'
import './App.css'

import TrainingsProvider from './TrainingsProvider'
import TrainingPage from './pages/TrainingPage'

function App() {

  return (
    <>
      <TrainingsProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new-training' element={<NewTrainingPage />} />
            <Route path='/training-page/:id' element={<TrainingPage />} />
          </Routes>
        </Router>
      </TrainingsProvider>
    </>
  )
}

export default App