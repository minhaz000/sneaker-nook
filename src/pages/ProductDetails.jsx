import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="mx-20 grid md:grid-cols-2 my-10">
      <div>
        <img className="h-[400px]" src={image_url} alt={title} />
      </div>
      <div className="mt-14 md:mx-8 ">
        <h1 className="text-3xl font-bold mb-5">{title}</h1>
        <h3 className="text-xl ">Brand : {brand}</h3>
        <h3 className="text-xl font-semibold">Price : ${price}</h3>
        <p className="text-lg font-light">Des: {description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
