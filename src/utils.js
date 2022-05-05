import { useState } from "react";

function useCategoryCount(categories, products) {
  const [phone, setPhone] = useState(0);
  const [computer, setComputer] = useState(0);
  const [electronic, setElectronic] = useState(0);

  let a = 0;
  let b = 0;
  let s = 0;

  for (let i = 0; i < products.length; i++) {
  
    if (products[i].category == categories[0]) {
      a++;
    }
    if (products[i].category == categories[1]) {
      b++;
    }
    if (products[i].category == categories[2]) {
      s++;
    }
  }

  setPhone(a);
  setComputer(b);
  setElectronic(s);
  return [phone, computer, electronic];
}

export default useCategoryCount;
