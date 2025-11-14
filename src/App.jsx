import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import NavTop from './NavTop.jsx';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import MyAccount from './MyAccount.jsx';
import Cart from './Cart.jsx';
import Product from './Product.jsx';
import Searchbar from "./Searchbar.jsx";
import Footer from './Footer.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';




const reactRouter = createBrowserRouter([

  { path: "/", element: <div > <NavTop /> <Searchbar /> <Home /></div> },
  { path: "/Shop", element: <div> <NavTop /> <Searchbar /> <Shop /></div> },
  { path: "/Contact", element: <div> <NavTop /> <Searchbar /> <Contact /></div> },
  { path: "/About", element: <div> <NavTop />   <Searchbar /> <About /></div> },
  { path: "/MyAccount", element: <div> <NavTop /> <Searchbar /> <MyAccount /></div> },
  { path: "/cart", element: <div> <NavTop />  <Searchbar /> <Cart /> <Footer/></div> },
  { path: "/product/:productId", element: <div> <NavTop />  <Searchbar /> <Product /></div> },
  { path: "/Loginpage", element: <div><Login/></div> },
  { path: "/signup", element: <div><Signup/></div> }



]);

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <RouterProvider router={reactRouter} />

    </div>
  );
}

export default App