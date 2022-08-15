import React, { useState } from "react";
import axios from 'axios'
const Customer = () => {
  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    balance: "",
    overDraft: "",
  });
  const getData =async () =>{
    // endpoint get Customer by id
    const {data : mydata} = await axios.get("http://localhost:3000/customerData")
    let data = mydata.filter((user)=>{
      return user["Customer ID"] == customer.id;
    })[0]
    setCustomer({
      "id":data["Customer ID"],
      "name" : data["Account Holder Name"],
      "balance" : data["Clear Balance (INR)-( Credit)"] ,
      "overDraft" : data["Overdraft"]
    })
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getData();
    }
  };
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="">Customer ID</label></div>
          <div className="col-8">
            <input
            className = "w-100"
              type="text"
              value={customer.id}
              onChange={({ target }) =>
                setCustomer({ ...customer, id: target.value })
              }
              onKeyPress = {handleKeyPress}
            />
          </div>
        </div>
        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="">Customer Name</label></div>
          <div className="col-8"><input className="w-100" type="text" value={customer.name} disabled /></div>
        </div>
        <div className="col-8 row mt-2 mb-2">
          <div className="col-4"><label htmlFor="">Clear Balance</label></div>
          <div className="col-8"><input className="w-100" type="number" value={customer.balance} disabled /></div>
        </div>
        <div className="col-8 row mt-2 mb-2">
          <div className="col-4"><label htmlFor="">Over Draft</label></div>
          <div className="col-8"><input className="w-100" type="text" value={customer.overDraft} disabled /></div>
        </div>
      </div>
    </>
  );
};

export default Customer;
