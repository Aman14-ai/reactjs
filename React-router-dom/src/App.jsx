import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contacts from './pages/Contacts'
import RootLayout from './Layout/RootLayout';
import ContactLayout from './Layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />

        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />} />
          <Route path='forms' element={<ContactForm />} />
        </Route>

        <Route path='product' element={<Product />} />
        <Route path= '*' element  ={< NotFound/>} />
      </Route>
    )
  )

  return (
    <>

      {/* <Navbar />
      <div className="container">
        <Routes> */}
      {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/product' element={<Product />} /> */}
      {/* </Routes> */}
      {/* </div> */}

      <RouterProvider router={Router} />
    </>
  )
}

export default App
