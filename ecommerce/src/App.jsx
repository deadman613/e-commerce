// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavTop from './NavTop'; // Import NavTop
// import Home from './Home.jsx';
// import Shop from './Shop.jsx';
// import Contact from './Contact.jsx';
// import About from './About.jsx';
// import MyAccount from './MyAccount.jsx';


// const reactRouter = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/shop", element: <Shop /> },
//   { path: "/contact", element: <Contact /> },
//   { path: "/about", element: <About /> },
//   { path: "/myaccount", element: <MyAccount /> }
 
// ]);

function App() {
  return (
    //<RouterProvider router={reactRouter}>//
      <section className="flex flex-col min-h-screen">
        <NavTop />
      </section>
    //</RouterProvider>//
  );
}

export default App;