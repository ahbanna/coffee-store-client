import React from "react";
import "./CoffeeCard.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  // const handleDelete = (_id) => {
  //   console.log(_id);
  //   fetch(`http://localhost:5000/coffee/${_id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.deletedCount > 0) {
  //         alert("deleted successfully");
  //       }
  //     });
  // };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 bg-[#f5f4f1] single-coffee">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div className="content">
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Taste: {taste}</p>
          <p>Category: {category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn">Update</button>
            </Link>

            <button className="btn" onClick={() => handleDelete(_id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
