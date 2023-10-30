import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import commerce from "../../utils/commerce";

const Details = () => {


 const [loading, setLoading] = useState(true);
    
  const params = useParams();

  const [product, setProduct] = useState([]);

  const fetchProducts = () => {
    commerce.products
      .retrieve(params.id)
      .then((product) => {setProduct(product), setLoading(false)});
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if(loading){
    return <div>
        <p></p>
    </div>
  }

  const {assets, name, description, price, id} = product;
  const {url} = assets[0];

  

  console.log(params);
  return (
    <div className="w-full flex justify-center my-10">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <div dangerouslySetInnerHTML={{__html: description}} />
          <p>${price.raw}</p>
          <div className="card-actions justify-end">
            <Link to="/">
            <button className="btn btn-primary">Home</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
