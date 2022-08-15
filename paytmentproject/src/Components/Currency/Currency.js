import React from "react";

const Currency = ({curOption ,handleChange}) => {
  return (
    <>
    {/* to generate droplist options */}
    <div className="row col-8 mt-2 mb-2">
      <div className="col-4"><label htmlFor="select option">Select Curency</label></div>
        <div className="col-8">
          <select className="w-50" name = "select option" onClick = {handleChange}>
            {Object.keys(curOption).map((type) => (
              <option value={type}>{type}</option>
            ))}
          </select>
        </div>
    </div>
    </>
  );
};

export default Currency;
