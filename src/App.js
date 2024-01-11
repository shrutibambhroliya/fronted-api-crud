import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import Add from './components/Add';
import HomePage from './page/HomePage';
import List from './components/List';
import Edit from './components/Edit';
import './App.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/LoginPage' element={ <LoginPage /> } />
        <Route path='/Add' element={ <Add /> } />
        <Route path='/List' element={ <List /> } />
        <Route path='/edit/:id' element={ <Edit /> } />
      </Routes>


    </div>
  )
}

export default App