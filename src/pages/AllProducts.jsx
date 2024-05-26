import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-5">All Produts</h1>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3  gap-4">
        {products.map((shoe) => (
          <SingleProductCardDashboard key={shoe.id} shoe={shoe} onDelete={handleDeleteProduct} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
