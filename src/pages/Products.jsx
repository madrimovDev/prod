import React from "react";
import { useSelector } from "react-redux";
import useCategoryCount from "../utils";

export const Products = () => {
  const products = useSelector((state) => state.products);

  let [phone, computer, electronic] = useCategoryCount(
    ["phone", "computer", "electronic"],
    products
  );

  console.log(phone, computer, electronic);
  if (!products.length) return <p>Hali Maxsulotlar yo'q</p>;

  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ul>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{product.category}</li>
                <li>{product.desc}</li>
              </ul>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
