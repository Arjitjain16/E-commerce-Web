import { Add, Remove } from "@mui/icons-material"
import Annoucement from "../Annoucement"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Newsletter from "../Newsletter"


const ProductMain = () => {
  return (
    <div>
        <Navbar/>
        <Annoucement/>
        <div className="h-[70vh] flex m-9">
            <div className="w-1/2">
                <img src="public/pngwing.com (3).png" className="h-full w-full object-cover" alt="" />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <h1 className="text-4xl font-semibold">Demin Jumpsuit</h1>
              <p className="w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis dolores esse sed, facilis facere 
                aspernatur odio veritatis possimus. Assumenda necessitatibus, 
                veritatis quibusdam a similique ipsa explicabo minus nostrum facere?
              </p>
              <span className="text-4xl">$ 40</span>
              <div className="flex justify-between w-1/2 mt-6">
                <div className="flex flex-row items-center">
                    <span className="text-2xl font-semibold">Color</span>
                    {/* <select className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary p-2 py-2 ">
                            <option disabled selected className="">Color</option>
                            <option >Red</option>
                            <option >Blue</option>
                            <option >Green</option>
                            <option >Yellow</option>
                            <option >Black</option>
                    </select> */}
                    <div className="ml-2 flex items-center  gap-2">
                      <div className="h-5 w-5 bg-black rounded-full"></div>
                      <div className="h-5 w-5 bg-blue-500 rounded-full"></div>
                      <div className="h-5 w-5 bg-green-700 rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <span className="text-2xl font-semibold">Size</span>
                    <select className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary p-2 ml-2">
                        <option disabled selected>Size</option>
                        <option >XS</option>
                        <option >S</option>
                        <option >M</option>
                        <option >L</option>
                        <option >XL</option>
                        <option >XXL</option>
                    </select>
                </div>
              </div>
              <div className="flex items-center justify-between w-1/2 mt-6">
                <div className="flex gap-1 items-center">
                  <Add/>
                  <span className="border border-black  px-3 rounded-md">1</span>
                  <Remove/>
                </div>
                <button className="py-3 px-5 border-teal-500 border-[3px] hover:bg-teal-300">Add To Cart</button>
              </div>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductMain