import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/common/Header'
import Home from './pages/Home'
import NewTrainingPage from './pages/NewTrainingPage'

import TrainingsProvider from './TrainingsProvider'

function App() {

  return (
    <>
      <TrainingsProvider>
        <Header />
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