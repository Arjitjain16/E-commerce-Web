import {productList} from "../../src/data"
import Product from "./Product"

const Products = () => {
  return (
    <div className="h-full w-full flex justify-center flex-wrap gap-3 py-10 ">
        {productList.map((item) =>(
            <Product  key={item.id} product={item} />
        ))}
    </div>
  )
}

export default Products