import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/common/Header'
import Home from './pages/Home'
import NewTrainingPage from './pages/NewTrainingPage'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-training' element={<NewTrainingPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App