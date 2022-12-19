import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Migration from "./Pages/Migration"
import Settings from "./Pages/Settings"
import Users from "./Pages/Users"

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <main className='ml-40 pl-20 pt-10 max-w-[80%]'>
      <Routes>
          <Route path="/" element={<Migration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
