import { Outlet, useLocation } from "react-router-dom"
import AddItem from "./Components/AddItem/AddItem"
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer";



function App() {

  const location = useLocation()
  console.log(location);


  return (
    <section>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        {
          location.pathname == "/login" ?
          ""
          :
          <Footer></Footer>
        }
      </div>
    </section>
  )
}

export default App
