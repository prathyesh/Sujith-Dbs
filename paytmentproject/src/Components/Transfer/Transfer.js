import React, { useState } from "react";

const Transfer = () => {
  const messagesList = {
    CHQD: "benificiary customer must be paid by cheque only",
    CORT: "payment is made in settlement for a trade",
    HOLD: "Benificiary customer or claimant will call upon identification",
    INTC: "Payment between two companies that belongs to the same group",
    PHOB: "Please advise the intermediary institute by phone",
    PHOI: "Please advise the intermediary by phone",
    PHON: "Please advise the account with institution by phone",
    REPA: "Payments has a related e-Payments interface",
    SDVA: "Payment must be executed with same day value to the",
  };
  const [messageCode, setMessageCode] = useState("");
  const [transferType, setTransferType] = useState("");
  const handleMessageClick = ({ target }) => {
    setMessageCode(target.value);
  };
  const handleTransferTypeClick = ({ target }) => {
    setTransferType(target.value);
  };
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="bic">Bic</label></div>
          <div className="col-8"><input name="bic" className="w-100" type="text" /></div>
        </div>
        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="institutename">Institution Name</label></div>
          <div className="col-8"><input name="institutename" className="w-100" type="text" /></div>
        </div>
        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="receivername">Receiver Name</label></div>
          <div className="col-8"><input name="receivername" className="w-100" type="text" /></div>
        </div>
        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="receiveraccountnumber">Receiver Account Number</label></div>
          <div className="col-8"><input name="receiveraccountnumber" className="w-100" type="text" /></div>
        </div>
        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="transfertype">Transfer Type</label></div>
          <div className="col-8">
            <select name="transfertype" className="w-50" onClick={handleTransferTypeClick}>
            <option default>Select an option</option>
            {
              ["Customer to Cutomer" , "Bank to Bank" , "Bank to Customer"].map(item=><option key = {item} value={item}>{item}</option>)
                    }
            </select>
          </div>
        </div>
        <div className="row col-8 mt-2 mb-2">
          <div className="col-4"><label htmlFor="messagecode">Message Code</label></div>
          <div className="col-8">
            <select name="messagecode" className="w-50" onClick={handleMessageClick}>
            <option default>Select an option</option>
              {
              Object.keys(messagesList).map(mcode=>
                <option key = {mcode} value={messagesList[mcode]}>{mcode}</option>
              )
              }
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
