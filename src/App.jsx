import { Outlet, useLocation } from "react-router-dom"
import AddItem from "./Components/AddItem/AddItem"
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer";
import SEO from "./Components/SEO/SEO";



function App() {

  const location = useLocation()
  // console.log(location);


  return (
    <section>
      {/* <div>
        <SEO title={'ZingZest World'} OGimage={'https://i.ibb.co/jLxSLCL/Screenshot-2024-05-19-202144.png'} OGtitle={'ZingZest World Online Shopping'}></SEO>
      </div> */}
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
