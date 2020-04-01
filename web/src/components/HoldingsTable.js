import React from "react";
import { connect } from "react-redux";
import "../style/holdingsTable.css";

import Holding from "./Holding";
import NewHolding from "./NewHolding";

const _mapStateToProps = state => ({ holdings: state });
const _mapDispatchToProps = dispatch => ({
  removeHolding: id =>
    dispatch({
      type: "DELETE_HOLDING",
      id: id
    }),
  incShares: id =>
    dispatch({
      type: "INC_SHARES",
      id: id
    }),
  decShares: id =>
    dispatch({
      type: "DEC_SHARES",
      id: id
    })
});

let HoldingsTable = ({ holdings, removeHolding, incShares, decShares }) => {
  return (
    <div className="holdingsTableApp">
      <h1 className="header">Holdings Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Unit Price</th>
            <th>Shares</th>
            <th>Market Value</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map(h => (
            <Holding
              key={h.id}
              {...h}
              removeHolding={() => removeHolding(h.id)}
              incShares={() => incShares(h.id)}
              decShares={() => decShares(h.id)}
            />
          ))}
          <NewHolding />
        </tbody>
      </table>
    </div>
  );
};
HoldingsTable = connect(
  _mapStateToProps,
  _mapDispatchToProps
)(HoldingsTable);

export default HoldingsTable;
