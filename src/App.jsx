import { Outlet, useLocation } from "react-router-dom"
import AddItem from "./Components/AddItem/AddItem"
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer";
import { Helmet } from "react-helmet-async";



function App() {

  const location = useLocation()
  // console.log(location);


  return (
    <section>
      <div>
        <Helmet prioritizeSeoTags>
          <head>
            {`
             <meta property="og:title" content='ZingZest World Online Shopping' />
             <meta property="og:image" content='https://i.ibb.co/jLxSLCL/Screenshot-2024-05-19-202144.png' 
             `}
          </head>
        </Helmet>
      </div>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        {
          location.pathname == "/login" || location.pathname == "/registration" ?
            ""
            :
            <Footer></Footer>
        }
      </div>
    </section>
  )
}

export default App
