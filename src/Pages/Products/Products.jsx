import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductsView from './ProductsView';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
    const [cari, setCari] = useSearchParams();
    const cariProduct = cari.get("cariproduct");
    const ubahCari = async (input) => {
      setCari({ cariproduct: input });
  
      const response = await axios.get(
        "https://fakestoreapi.com/Products" + cariProduct
      );
      const data = await response.data;
      sethasilCari(data);
    };
  
    const [product, setProduct] = useState();
    const [hasilCari, sethasilCari] = useState();
    const ambilProduct = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/Products"
      );
      const data = await response.data;
      setProduct(data);
    };
  
    useEffect(() => {
      ubahCari(cariProduct);
      ambilProduct();
    }, []);
  
    console.log(hasilCari);
  
    const hasilFilter = cariProduct ? hasilCari : product;
  
    return (
      <ProductsView cariProduct={cariProduct} hasilCari={hasilCari} hasilFilter={hasilFilter} ubahCari={ubahCari} />
    )
  };

export default Products