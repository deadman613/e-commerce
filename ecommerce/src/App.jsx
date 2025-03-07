import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import React from 'react';
import NavTop from './NavTop';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import MyAccount from './MyAccount.jsx';
import Cart from './Cart.jsx';



const reactRouter = createBrowserRouter([
  { path: "/", element: <div> <NavTop/> <Home /></div> },

  { path: "/Shop", element: <div> <NavTop/> <Shop /></div> },
  { path: "/Contact", element: <div> <NavTop/> <Contact /></div> },
  { path: "/About", element: <div> <NavTop/> <About /></div> },
  { path: "/MyAccount", element: <div> <NavTop/> <MyAccount /></div>},
  { path: "/cart", element: <div> <NavTop/> <Cart/></div>}
]);

function App() {
  return (
    <section className="flex flex-col min-h-screen">
     <RouterProvider  router={reactRouter}  />
    
    </section>
  );
}

export default App