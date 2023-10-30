import { Link } from "react-router-dom";

const Product = ({product}) => {

    const {assets, name, description, price, id} = product;
    const {url} = assets[0];

    console.log(url);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div dangerouslySetInnerHTML={{__html: description}} />

          <p>${price.raw}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full">
                <Link to={`/details/${id}`}>
                Details
                </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
