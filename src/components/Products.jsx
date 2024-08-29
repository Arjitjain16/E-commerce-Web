import { useEffect, useState } from "react";
import { productList } from "../../src/data";
import Product from "./Product";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` :
          "http://localhost:5000/api/products"
        );
        setProducts(res.data)
      } catch (error) {
        console.error(error); // log the error
      }
    };
    getProducts(); // call the function
  }, [cat]); // add dependency to re-run the effect when cat changes

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);


  return (
    <div className="h-full w-full flex justify-center flex-wrap gap-3 py-10 ">
      {products.map((item) => ( // use the state instead of productList
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;