import { Link, Outlet } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5";
const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-neutral min-h-screen">
        <div className="h-[150px] text-left"></div>
        <Link to={"home"} className="btn btn-neutral pb-2 w-full rounded-none pr-[27px]">
          <span className="text-[18px] ">
            <MdOutlineDashboard />
          </span>
          Dashboard
        </Link>

        <Link to={"all-products"} className="btn btn-neutral pb-2 w-full rounded-none">
          <span className="text-[18px] ">
            <FaClipboardList />
          </span>
          All Products
        </Link>

        <Link to={"add-products"} className="btn btn-neutral pb-2 w-full rounded-none">
          <span className="text-[18px] ">
            <IoBagAddSharp />
          </span>
          Add Product
        </Link>
        <Link to={"/"} className="btn btn-neutral pb-2 w-full rounded-none pr-[55px] ">
          <span className="text-[18px] ">
            <FaHome />
          </span>
          Home
        </Link>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
