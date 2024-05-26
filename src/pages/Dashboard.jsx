import { useEffect, useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import axios from "axios";
import useAuth from "../hooks/useAuth";
const Dashboard = () => {
  const [products, setProduct] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios.get("http://localhost:3000/shoes").then((res) => setProduct(res.data));
  }, []);
  console.log(user);
  return (
    <>
      <div className="card  w-[350px] bg-red-400 text-white shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title text-center">
            <GiShoppingBag /> Total Product
          </h2>
          <span className=" font-bold ">{products.length} </span>
        </div>
      </div>
      <div className="card w-[350px] bg-red-400 text-white shadow-xl mt-20">
        <div className="card-body ">
          <div className="card-title mb-3 flex">
            <img className="rounded-full h-[50px]" src={user.photoURL} alt="" />
            Current User
          </div>
          <div className=" font-bold mb-[-10px]">Name: {user.displayName} </div>
          <div className=" font-bold ">Email: {user.email} </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
