import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from '../components/ProtectedRoutes'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Modal from '../pages/Modal'

const RoutesMain = () => (

    <Routes>

        <Route path='/' element={ <Home/> }/>
        <Route path='register' element={ <Register/> }/>

        <Route element={<ProtectedRoutes/>}>
            <Route path='dashboard' element={ <Dashboard/>}>
                <Route path='addTechnologie' element={<Modal/>}/>
            </Route>
        </Route>
        
        <Route path='*' element={<Navigate to='/'/>} />

    </Routes>

)
  

export default RoutesMain