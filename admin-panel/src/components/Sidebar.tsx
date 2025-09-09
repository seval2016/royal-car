import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Car,
  Users, 
  Calendar, 
  UserCheck, 
  MessageSquare, 
  HelpCircle,
  X,
  ChevronRight
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/cars', label: 'Cars', icon: Car },
    { path: '/drivers', label: 'Drivers', icon: UserCheck },
    { path: '/bookings', label: 'Bookings', icon: Calendar },
    { path: '/users', label: 'Users', icon: Users },
    { path: '/reviews', label: 'Reviews', icon: MessageSquare },
    { path: '/contacts', label: 'Contacts', icon: MessageSquare },
    { path: '/faqs', label: 'FAQs', icon: HelpCircle },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center h-16 px-6 border-b bg-slate-900">
       
            <img 
              src="/images/logo.png" 
              alt="Royal Car Logo" 
              className="w-40 h-40 object-contain"
            />
         
    
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-6">
          <div className="px-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Management
            </p>
          </div>
          
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
                onClick={onClose}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
                {isActive && (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default Sidebar
