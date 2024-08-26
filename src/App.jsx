
import Home from "./componenets/page/Home"
import Annoucement from "./componenets/Annoucement"
import Slider from "./componenets/Slider"
import Categories from "./componenets/Categories"
import Products from "./componenets/Products"
import Newsletter from "./componenets/Newsletter"

const App = () => {
  return (
    <div>
      <Annoucement/>
      <Home/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default App