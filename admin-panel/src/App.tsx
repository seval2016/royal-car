import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Cars from './pages/Cars'
import Drivers from './pages/Drivers'
import Bookings from './pages/Bookings'
import Users from './pages/Users'
import Reviews from './pages/Reviews'
import Contacts from './pages/Contacts'
import FAQs from './pages/FAQs'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
