import React, { useState , useEffect} from "react";
import Currency from "../Currency/Currency";

const TransactionDetails = () => {
  const curOption = {
    USD: 72.84,
    GBP: 102,
    EUR: 84,
    JPY: 0.645,
    INR: 1
  };
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [transferAmount , setTransferAmount] = useState({"tax" :0 , "totalAmount" : 0});

  const handleCurrencyChange = ({ target }) => {
    setCurrency(target.value);
  };
  useEffect(() => {
    const convertToInr = amount * ((typeof(curOption[currency]) ==='undefined')?0:curOption[currency])
    setTransferAmount({"tax" : convertToInr*.0025 , "totalAmount" : convertToInr+convertToInr*.0025})
  }, [amount , currency])
  
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <Currency curOption={curOption} handleChange={handleCurrencyChange} />
        {/* <input type="text" value = {currency}/> */}

        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="enteredAmount">Amount</label></div>
          <div className="col-8">
            <input
            className="w-100"
              name="enteredAmount"
              type="text"
              placeholder="Enter amount"
              value = {amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </div>
        </div>
        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="tax">Tax</label></div>
          <div className="col-8"><input className="w-100" name = "tax" type="text" value = {transferAmount.tax} disabled/></div>
        </div>
        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="totalAmount">Total Amount</label></div>
          <div className="col-8"><input className="w-100" name = "totalAmount" value={transferAmount.totalAmount} type="text" disabled/></div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetails;
