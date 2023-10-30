import { useEffect, useState } from "react";
import commerce from "../../utils/commerce";
import Product from "./Product";

const Products = ({product}) => {

    const [products, setProducts] = useState([])
    /**
 * Fetch products data from Chec and stores in the products data object.
 * https://commercejs.com/docs/sdk/products
 */
const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
      console.log(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  
    return (
        <div className="my-10">
            <h1 className="text-2xl font-bold text-center py-10">This Is Commerce Projects</h1>
            <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto">
            {
                products?.map(product => <Product key={products.id} product={product}></Product>)
            } 
            </div> 
        </div>
    );
};

export default Products;