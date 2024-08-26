
import { FavoriteBorderOutlined, Search, ShoppingCartCheckoutOutlined } from "@mui/icons-material"
const Product = ({product}) => {
  return (
    <div className="h-[52vh] w-[22%] bg-zinc-50 flex items-center justify-center relative">
        <div className="h-[250px] w-[250px] rounded-full bg-white absolute top-16 left-10"></div>
        <img src={product.image} alt="" className="h-[60%] w-[60%] z-10" />
        <div style={{background : "rgba(0,0,0,0.2)"}}
           className="absolute top-0 left-0 flex items-center justify-center gap-5 z-20 h-full w-full opacity-0 hover:opacity-[1]  hover:transition-all hover:duration-500 hover:ease">
            <div className="h-10 w-10 bg-white flex items-center justify-center rounded-full 
             hover:scale-[1.2] hover:transition-all hover:duration-500 hover:ease cursor-pointer">
               <ShoppingCartCheckoutOutlined/>
            </div>
            <div className="h-10 w-10 bg-white flex items-center justify-center rounded-full
             hover:scale-[1.2] hover:transition hover:duration-500 hover:linear cursor-pointer">
                <Search/>
            </div>
            <div className="h-10 w-10 bg-white flex items-center justify-center rounded-full
             hover:scale-[1.2] hover:transition hover:duration-500 hover:linear cursor-pointer">
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product