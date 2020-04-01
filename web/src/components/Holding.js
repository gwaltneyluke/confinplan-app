import React from "react";

let Holding = ({
  id,
  symbol,
  unitPrice,
  shares,
  removeHolding,
  incShares,
  decShares
}) => {
  let marketValue = unitPrice * shares;
  return (
    <tr key={id}>
      <td>{symbol}</td>
      <td>{unitPrice}</td>
      <td>
        <div>
          {shares}
          <button
            className="deleteButton"
            onClick={decShares}
            style={{ float: "right" }}
          >
            -
          </button>
          <button
            className="addButton"
            onClick={incShares}
            style={{ float: "right" }}
          >
            +
          </button>
        </div>
      </td>
      <td>{marketValue}</td>
      <td>
        <button className="deleteButton" onClick={removeHolding}>
          remove
        </button>
      </td>
    </tr>
  );
};

export default Holding;
