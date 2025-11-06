import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const CreateAProduct = () => {
  const { user } = useAuth();

  const handleCreateAProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;

    const newProduct = {
      title,
      image,
      price_min,
      price_max,
      email: user.email,
      seller_name: user.displayName,
    };

    axios.post("http://localhost:3000/products", newProduct).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your product has been created.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="lg:w-1/5 mx-auto">
      <form onSubmit={handleCreateAProduct}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="title" className="input" />

          <label className="label">Image URL</label>
          <input type="text" className="input" name="image" />

          <label className="label">Min Price</label>
          <input
            type="text"
            name="price_min"
            className="input"
            placeholder="Min Price"
          />
          <label className="label">Max Price</label>
          <input
            type="text"
            name="price_max"
            className="input"
            placeholder="Max Price"
          />
          <button className="btn btn-neutral mt-4">Add A Product</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAProduct;
