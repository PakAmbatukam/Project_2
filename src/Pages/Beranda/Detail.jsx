// import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { id} = useParams();
  const [product, setProduct] = useState();

  const ambilProduct = async () => {
    const response = await axios.get(
      `https://restaurant-api.dicoding.dev/detail/${id}`
    );
    const data = await response.data;
    setProduct(data);
  };

  useEffect(() => {
    ambilProduct();
  }, []);

  console.log(product);

  return (
    <div>
      <center>
        
      <h1 className="mb-5 card-title">{product?.restaurant?.name}</h1>
        <img
          src={
            "https://restaurant-api.dicoding.dev/images/medium/" +
            product?.restaurant?.pictureId
          }
          alt=""
          
          
        />
        <p>{product?.restaurant?.description}</p>
      </center>
    </div>
  );
};

export default Detail;
