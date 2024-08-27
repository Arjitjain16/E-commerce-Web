import Navbar from "../Navbar"
import Annoucement from "../Annoucement"
import Footer from "../Footer"
import { Add, Remove } from "@mui/icons-material"

const Cart = () => {
  return (
    <div>
        <Navbar/>
        <Annoucement/>
        <div className="flex flex-col m-6 gap-6">
            <div className="flex items-center justify-center pt-5">
              <h1 className="text-4xl font-semibold">Your BAG</h1>
            </div>
            <div className="flex justify-between">
                <button className="bg-[#F2F2F2] px-5 py-2">CONTINUE SHOPPING</button>
                <div className="flex gap-2">
                    <h1 className="underline text-xl">Shopping bag (2)</h1>
                    <h1 className="underline text-xl">Your Wishlist (0)</h1>
                </div>
                <button className="bg-black text-white px-4 py-2">CHECKOUT NOW</button>
            </div>
            <div className="flex justify-between w-full">
                <div className="w-1/3 flex">
                  <div className="w-[200px] h-[200px] flex items-center">
                    <img src="public/pngwing.com (5).png" className="w-full h-full" alt="" />
                  </div>
                  <div className="flex flex-col gap-4 justify-center">
                    <h1><span className="font-bold">Product: </span>JESSI THUNDER DRESS</h1>
                    <h1><span className="font-bold">ID: </span>8994994999</h1>
                    <div className="h-5 w-5 bg-black rounded-full"></div>
                    <h1><span className="font-bold">Size: </span>38</h1>
                  </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center gap-4">
                  <div className="flex gap-2 items-center">
                    <Add/>
                    <span className="text-2xl">2</span>
                    <Remove/>
                  </div>
                  <h1 className="text-3xl">$ 30</h1>
                </div>
                <div className="bg-red-300 w-1/3 border border-gray-300 flex flex-col gap-5 p-3">
                 <h1 className="text-4xl font-semibold">ORDER SUMMARY</h1>
                 <div className="flex justify-between">
                    <h1 className="text-xl">Subtotal</h1>
                    <h1 className="text-xl">$60</h1>
                 </div>
                 <div className="flex justify-between">
                    <h1 className="text-xl">Estimate Shipping</h1>
                    <h1 className="text-xl">$ 49</h1>
                 </div>
                 <div className="flex justify-between">
                    <h1 className="text-xl">Shopping Discount</h1>
                    <h1 className="text-xl">$-59</h1>
                 </div>
                 <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold">Total</h1>
                    <h1 className="text-3xl font-semibold">$70</h1>
                 </div>
                 <div>
                  <button className="bg-[#B3B3B3] py-1 px-5 text-black">CHECKOUT NOW</button>
                 </div>
                </div>
            </div>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Cart