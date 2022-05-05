import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../store/productSlice";

export const Form = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("category");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!name.trim() || !price || category === "category" || !desc.trim())
      return alert("Malumotlar To'liq Emas");

    const product = {
      id: nanoid(5),
      name,
      price,
      category,
      desc,
    };
    dispatch(createProduct(product));
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Add Product</h1>
      <div>
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Prod Name"
        />
      </div>
      <div>
        <input
          required
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          placeholder="Prod Price"
        />
      </div>
      <div>
        <select
          required
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option disabled value="category">
            Category
          </option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="electronic">Electronics</option>
        </select>
      </div>
      <div>
        <textarea
          required
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
          placeholder="Description"
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
