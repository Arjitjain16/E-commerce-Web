
import Annoucement from "../Annoucement"
import Categories from "../Categories"

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
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home