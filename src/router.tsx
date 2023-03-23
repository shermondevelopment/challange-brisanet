import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* pages */
import Commics from './pages/Commics/Commics'
import Home from './pages/Home'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/commics" element={<Commics />} />
    </Routes>
  </BrowserRouter>
)

export default Router
