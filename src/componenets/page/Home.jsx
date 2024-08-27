
import Annoucement from "../Annoucement"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Newsletter from "../Newsletter"
import Products from "../Products"
import Slider from "../Slider"



const Home = () => {
  return (
    <div>
        <Annoucement/>
        <Navbar/>
        <Slider/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home