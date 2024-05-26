/* eslint-disable no-undef */
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div id="product">
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4    gap-4">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 4).map((shoe) => (
            <SingleProduct key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
