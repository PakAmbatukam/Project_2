import axios from 'axios';
import React, { useCallback, useEffect, useReducer } from 'react'
import { useSearchParams } from 'react-router-dom';
import NegaraView from './NegaraView';



const nilaDefault = {
    data: [],
    filterData: [],
    loading: true,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_BERHASIL":
        return {
          ...state,
          data: action.payload,
          filterData: action.payload,
          loading: false,
        };
      case "SET_FILTER":
        return {
          ...state,
          filterData: action.payload,
        };
      default:
        throw new Error("error di case");
    }
  };

const Negara = () => {
    const [state, dispatch] = useReducer(reducer, nilaDefault);

    const [cari, setCari] = useSearchParams();
    const cariProduct = cari.get("cariproduct");
    const ubahCari = useCallback(
      async (input) => {
        setCari({ cariproduct: input });
  
        const response = await axios.get(
          "https://freetestapi.com/api/v1/countries" + cariProduct
        );
        const data = await response.data;
        // sethasilCari(data);
        dispatch({ type: "SET_FILTER", payload: data });
      },
      [cariProduct]
    );
  
    // const [product, setProduct] = useState();
    // const [hasilCari, sethasilCari] = useState();
    const ambilProduct = async () => {
      const response = await axios.get(
        "https://freetestapi.com/api/v1/countries"
      );
      const data = await response.data;
      // setProduct(data);
      dispatch({ type: "FETCH_BERHASIL", payload: data });
    };
  
    useEffect(() => {
      ubahCari(cariProduct);
      ambilProduct();
    }, []);
  
    console.log(state);
  
    const hasilFilter = cariProduct ? state.filterData : state.data;
  
    return (
      <NegaraView
        cariProduct={cariProduct}
        hasilCari={state.filterData}
        hasilFilter={hasilFilter}
        ubahCari={ubahCari}
      />
    );
  };

export default Negara