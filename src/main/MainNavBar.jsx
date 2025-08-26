import React from 'react'
import { Link, Route,Routes } from 'react-router-dom'

import CustomerRegistration from '../customer/CustomerRegistration'
import AgentRegistration from '../deliveryagent/AgentRegistration'
import CustomerLogin from '../customer/CustomerLogin'
import ManagerLogin from '../restaurantmanager/ManagerLogin'
import AgentLogin from '../deliveryagent/AgentLogin'
import AdminLogin from '../admin/AdminLogin'
import NotFound from './NotFound'
import Home from './Home'
import './Style.css'

export default function MainNavBar() 
{

  return (
    <div>
      <nav className='navbarh' >
        <div className='logo'><img src='/CraveIn.jpg' alt='Image Not Found' height={100} width={100}/></div>
        <ul className='nav-linksh'>
            <li className='dropdown'>
              <button><span>LogIn ▾</span></button>
              <ul className='dropdown-menu'>
                <li><Link to='/CustomerLogin'>Customer</Link></li>
                <li><Link to='/AgentLogin'>delivery Agent</Link></li>
                <li><Link to='/ManagerLogin'>Manager</Link></li>
                <li><Link to='/AdminLogin'>Admin</Link></li>
              </ul>
            </li>
            <li className='dropdown'>
              <button><span>SignIn ▾</span></button>
              <ul className='dropdown-menu'>
              <li><Link to="/CustomerRegistration">Customer SingIn</Link></li>
              <li><Link to="/AgentRegistration">Agent SingIn</Link></li>
              </ul>
            </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/CustomerRegistration' element={<CustomerRegistration/>} exact/>
        <Route path='/AgentRegistration' element={<AgentRegistration/>} exact/>
        <Route path='/CustomerLogin' element={<CustomerLogin/>} exact/>
        <Route path='/ManagerLogin' element={<ManagerLogin/>} exact/>
        <Route path='/AgentLogin' element={<AgentLogin/>} exact/>
        <Route path='/AdminLogin' element={<AdminLogin/>} exact/>
        <Route path='*' element={<NotFound/>} exact/>
      </Routes>
      <video autoPlay loop muted className="video-background">
                <source src="/food.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
