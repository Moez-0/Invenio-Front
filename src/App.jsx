import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import CourseList from './pages/CourseList';
import Offers from './pages/Offers';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Instructors from './pages/Instructors';
import Explore from './pages/Explore';
import About from './pages/About';
import Dashboard from './pages/User/Dashboard';
import EducatorDashboard from './pages/Educator/EducatorDashboard';
import Livestream from './pages/Educator/LiveStream';
import CartPage from './pages/User/Cart';
import CoursePage from './components/home/CoursePage';
import CheckoutPage from './pages/User/Checkout';
import ConfirmationPage from './pages/User/Confirmation';
import LearnerDashboard from './pages/User/Welcome';
import InstructorDashboard from './pages/Educator/Welcome';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='courses' element={<CourseList />} />
          <Route path='offers' element={<Offers />} />
          <Route path='instructors' element={<Instructors />} />
          <Route path='about' element={<About />} />
          <Route path='explore' element={<Explore />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='confirmation' element={<ConfirmationPage />} />
          <Route path='course/:id' element={<CoursePage />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='/learner/welcome' element={<LearnerDashboard />} />
          <Route path='educator-dashboard' element={<EducatorDashboard />} />
          <Route path='/educator/welcome' element={<InstructorDashboard />} />
          <Route path='livestream' element={<Livestream />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
