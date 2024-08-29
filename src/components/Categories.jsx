import { productItems} from "../../src/data"
import CategoryItem from "./CategoryItem"

const Categories = () => {
  return (
    <div className="flex items-center justify-center gap-2 pl-9 py-7 ">
        {productItems.map((item, index)=>(
            <CategoryItem  key={index} item={item} />

        ))}
    </div>
  )
}

export default Categories