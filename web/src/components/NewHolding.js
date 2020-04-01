import React from "react";
import { connect } from "react-redux";

let NewHolding = ({ dispatch }) => {
  return (
    <tr>
      <td>
        <input type="text" id="symbol" />
      </td>
      <td>
        <input type="text" id="unitPrice" />
      </td>
      <td>
        <input type="text" id="shares" />
      </td>
      <td>
        <button
          className="addButton"
          onClick={() =>
            dispatch({
              type: "ADD_HOLDING",
              holding: {
                symbol: document.getElementById("symbol").value,
                unitPrice: document.getElementById("unitPrice").value,
                shares: document.getElementById("shares").value
              }
            })
          }
        >
          add
        </button>
      </td>
    </tr>
  );
};
NewHolding = connect()(NewHolding);

export default NewHolding;
