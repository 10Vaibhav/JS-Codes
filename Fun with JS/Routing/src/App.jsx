import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import { RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParamComponent from "./components/ParamCompnent";
import Courses from "./components/Courses";
import Reports from "./components/Reports";
import MockTest from "./components/MockTest";
import NotFound from "./components/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element:
        <div>
          <Navbar />
          <Dashboard />
        </div>
      ,
      children:[
        {
          path : 'courses',
          element: <Courses/>
        }, {
          path: "mock-tests",
          element: <MockTest/>
        }, {
          path: "reports",
          element: <Reports/>
        }
      ],
    },
    {
      path: "/student/:id",
      element: (
        <div>
          <Navbar />
          <ParamComponent />
        </div>
      ),
    },
    {
      path : "*",
      element: <NotFound/>,
    }
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
