import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to server starts
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    // send data to server end
  };

  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-extrabold mb-4">Update coffee: {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex mb-10">
          <div className="form-control w-full">
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control w-full ml-4">
            <label className="input-group">
              <span>Quantity</span>
              <input
                type="text"
                name="quantity"
                placeholder="Coffee Quantity"
                className="input input-bordered w-full"
                defaultValue={quantity}
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-10">
          <div className="form-control w-full">
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
                defaultValue={supplier}
              />
            </label>
          </div>
          <div className="form-control w-full ml-4">
            <label className="input-group">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="Coffee Taste"
                className="input input-bordered w-full"
                defaultValue={taste}
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-10">
          <div className="form-control w-full">
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
                defaultValue={category}
              />
            </label>
          </div>
          <div className="form-control w-full ml-4">
            <label className="input-group">
              <span>Details</span>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
                defaultValue={details}
              />
            </label>
          </div>
        </div>
        <div>
          <div className="form-control w-full">
            <label className="input-group">
              <span>Photo</span>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                defaultValue={photo}
              />
            </label>
          </div>
        </div>
        <div className="submit-btn">
          <input
            type="submit"
            value="Update coffee"
            className="btn btn-block mt-10"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
