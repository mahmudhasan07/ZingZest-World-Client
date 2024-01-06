import { Outlet } from "react-router-dom"
import AddItem from "./Components/AddItem/AddItem"
import NavBar from "./Components/NavBar/NavBar"



function App() {


  return (
    <section>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </section>
  )
}

export default App
