import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import List from './crud/List'
import AddList from './crud/AddList'
import Header from './layout/Header'
import EditList from './crud/EditList'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<List />} path='/'></Route>
        <Route element={<AddList />} path='/add'></Route>
        <Route element={<EditList />} path='/:editid'></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App