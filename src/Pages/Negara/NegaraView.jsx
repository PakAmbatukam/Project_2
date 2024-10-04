import React from 'react'
import { Link } from 'react-router-dom';

const NegaraView = ({ubahCari, cariProduct, hasilCari, hasilFilter}) => {
    return (
        <div className="beranda">
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={(input) => ubahCari(input.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <p>
            Hasil dari : {cariProduct}, ditemukan : {hasilCari?.founded}{" "}
          </p>
    
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {hasilFilter?.map((data) => (
              <div key={data?.name} className="">
                <div className="card bg-base-100 w-96 shadow-xl">
                  <figure>
                    <img
                      src={data.flag}
                      alt="Product"
                    />
                    <p>{data.currenncy}</p>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data?.name}</h2>
                    <p>{data.currency}</p>
                    <div className="card-actions justify-end">
                      <Link to={"/Negaradetail/" + data.id} className="btn btn-primary">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default NegaraView