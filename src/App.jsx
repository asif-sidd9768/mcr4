import { Route, Routes } from 'react-router-dom'
import './App.css'
import { SideBar } from './components/SideBar/SideBar'
import { ForumPage } from './pages/ForumPage/ForumPage'
import { Navbar } from './components/Navbar/Navbar'
import { ForumDetail } from './pages/ForumDetail/ForumDetail'

function App() {
  return (
    <div>
      <Navbar />
      <div className='app-container'>
        <div>
          <SideBar />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<ForumPage />}/>
            <Route path="/forum/:forumId" element={<ForumDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
