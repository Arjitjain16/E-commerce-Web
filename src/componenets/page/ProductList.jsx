
import Annoucement from "../Annoucement"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Newsletter from "../Newsletter"
import Products from "../Products"



const ProductList = () => {
  return (
    <div>
        <Navbar/>
        <Annoucement/>
        <h1 className="text-5xl font-bold m-9">Dresses</h1>
        <div className="flex justify-between m-9">
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold">Filter Products:</h1>
               <select className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary p-2 py-2 ml-4">
                    <option disabled selected className="">Color</option>
                    <option >Red</option>
                    <option >Blue</option>
                    <option >Green</option>
                    <option >Yellow</option>
                    <option >Black</option>
               </select>
               <select className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary p-2 ml-6">
                    <option disabled selected>Size</option>
                    <option >XS</option>
                    <option >S</option>
                    <option >M</option>
                    <option >L</option>
                    <option >XL</option>
                    <option >XXL</option>
               </select>
            </div>
            <div className="flex items-center">
               <h1 className="text-2xl font-semibold">Sort Products:</h1>
               <select className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary p-2 ml-6">
                    <option>Newest</option>
                    <option>Price(LTH)</option>
                    <option>Price(HTL)</option>
                   
               </select>
            </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList