/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("product deleted successfully");
        onDelete(id);
      });
  };

  return (
    <div className="card w-70 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>
        <p>{description.length > 100 ? description.slice(0, 70) + "..." : description}</p>
        <h3 className="text-xl font-semibold"> price :{price}</h3>
        <div className="card-actions ">
          <button className="btn btn-sm bg-indigo-500 text-white">
            <Link to={`/products/${id}`}>Details</Link>
          </button>
          <button className="btn btn-sm bg-green-600 text-white">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          {/* <button onClick={handleDelete} className="btn btn-sm bg-red-500 text-white">
            Delete
          </button> */}
          <button
            className="btn btn-sm bg-red-500 text-white"
            onClick={() => document.getElementById(`delete_modal_${id}`).showModal()}
          >
            Delete
          </button>
        </div>
      </div>

      <dialog id={`delete_modal_${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Are You Sure ?</h3>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleDelete} className="btn btn-sm bg-red-500 text-white mr-4 ">
                Yes
              </button>
              <button className="btn  btn-sm  btn-primary text-white">NO</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SingleProductCardDashboard;
