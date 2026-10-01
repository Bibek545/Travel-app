import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/home/DefaultLayout'
import Home from '../pages/Home'
import Explore from '../pages/Explore'
import Inspiration from '../pages/Inspiration'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='/explore' element={<Explore />}></Route>
                    <Route path="/inspiration" element={<Inspiration />}></Route>


                </Route>
            </Routes>
        </div>
    )
}

export default AppRoutes
