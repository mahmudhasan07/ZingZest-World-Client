import { Outlet, useLocation } from "react-router-dom"
import AddItem from "./Components/AddItem/AddItem"
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer";
import SEOFile from "./Components/SEO/SEO";



function App() {

  const location = useLocation()
  // console.log(location);


  return (
    <section>
      <div>
        <SEOFile title='ZingZest World' OGimage='https://i.ibb.co/2Zm86yp/galcier.jpg' OGtitle='Mahmud Hasan Siddique'></SEOFile>
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
