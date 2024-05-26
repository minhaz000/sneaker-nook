import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card w-70 bg-base-100 shadow-xl px-4">
      <figure className=" h-[200px]">
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        {/* <h3 className="text-xl font-semibold"> {brand}</h3> */}
        <p className="text-sm">{description.length > 100 ? description.slice(0, 70) + "..." : description}</p>
        <h3 className="text-md font-semibold">Price: {price}</h3>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>Show details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
