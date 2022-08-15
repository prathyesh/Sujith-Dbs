import React from "react";
import Customer from "../Customer/Customer";
import Transfer from "../Transfer/Transfer";
import TransactionDetails from "../TransactionDetails/TransactionDetails";
const Transaction = () => {
  return (
    <>

      <div className="container" >
        <div className="row d-flex flex-column" >
          <div style = {{border : ".2rem solid black" , margin : "0 auto"}} className="col-8 mt-3 mb-3 p-2 ">
            <h3 className="text-center"><code>Customer Details</code></h3>
            <Customer />
          </div>
          <div style = {{border : ".2rem solid black" , margin : "0 auto"}} className="col-8 mt-3 mb-3 p-2">
          <h3 className="text-center"><code>Transfer</code></h3>
            <Transfer />
          </div>
          <div style = {{border : ".2rem solid black" , margin : "0 auto"}} className="col-8 mt-3 mb-3 p-2">
          <h3 className="text-center"><code>Transaction Details</code></h3>
            <TransactionDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
