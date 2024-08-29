
import { useLocation } from "react-router-dom"
import Annoucement from "../Annoucement"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Newsletter from "../Newsletter"
import Products from "../Products"
import { useState } from "react"



const ProductList = () => {
     const location = useLocation()
     const cat = location.pathname.split('/')[2]
     const [Filter, setFilter] = useState({})
     const [Sort, setSort] = useState('Newest')

     const handleFilter = (e) =>{
          const value = e.target.value
          setFilter({
               ...Filter , [e.target.value] : value,
          })
     }
  return (
    <div>
        <Navbar/>
        <Annoucement/>
        <h1 className="text-5xl font-bold m-9">Dresses</h1>
        <div className="flex justify-between m-9">
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold">Filter Products:</h1>
               <select name="color" onChange={handleFilter}  className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary p-2 py-2 ml-4">
                    <option>Color</option>
                    <option >Red</option>
                    <option >Blue</option>
                    <option >Green</option>
                    <option >Yellow</option>
                    <option >Black</option>
               </select>
               <select name="size" onChange={handleFilter} className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary p-2 ml-6">
                    <option>Size</option>
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
               <select onChange={(e)=>setSort(e.target.value)} className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary p-2 ml-6">
                    <option value="newest">Newest</option>
                    <option value="asc">Price(LTH)</option>
                    <option value="desc">Price(HTL)</option>
                   
               </select>
            </div>
        </div>
        <Products cat={cat} filters={Filter} sort={Sort}/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList