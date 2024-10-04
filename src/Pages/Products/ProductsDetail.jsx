import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const ambilProduct = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/ProductsDetail/" + id
    );
    const data = await response.data;
    setProduct(data);
  };

  useEffect(() => {
    ambilProduct();
  }, []);
  return (
    <div>
      <center>
        <img src={product?.image} alt="" />
        <h1>{product?.title}</h1>
      </center>
    </div>
  );
};

export default ProductsDetail;
