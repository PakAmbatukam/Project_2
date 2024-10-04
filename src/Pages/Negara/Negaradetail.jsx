import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Negaradetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
  
    const ambilProduct = async () => {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/countries/${id}`
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
          
        <h1 className="mb-5 card-title">{product?.name}</h1>
          <img
            src={product?.flag}
            alt=""
          />
          <p>{product?.currency}</p>
          <p>{product?.land_area}</p>
          <p>{product?.population}</p>
        </center>
      </div>
    );
  };

export default Negaradetail