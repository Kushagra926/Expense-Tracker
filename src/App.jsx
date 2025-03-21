
import './App.css'
import CardComponent from './CardComponent'
import Header from './Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Product from './Routes/Product';
import Home from './Routes/Home';

function App() {

  const router = createBrowserRouter([
    {
    path:'/',
    element: <Home />
    },
    {
    path:'about',
    element: <About />
    },
    {
    path: 'contact us',
    element: <Contact />,
    },
    {
    path: 'products',
    element: <Product />,
    }
  ])

  return (
    <>
    <Header/>
    <div className="card">
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    </div>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
