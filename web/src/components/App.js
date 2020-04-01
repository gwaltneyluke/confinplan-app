import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import HoldingsTable from "./HoldingsTable";

const initialHoldings = [
  {
    id: 1,
    symbol: "GOOG",
    unitPrice: 121.12,
    shares: 6
  },
  {
    id: 2,
    symbol: "APPL",
    unitPrice: 75.57,
    shares: 8
  },
  {
    id: 3,
    symbol: "POO",
    unitPrice: 5.45,
    shares: 21
  }
];

const holdingsApp = (state = initialHoldings, action) => {
  switch (action.type) {
    case "ADD_HOLDING":
      console.log("adding holding");
      let newHolding = {
        ...action.holding,
        id: state.length + 1
      };
      return [...state, newHolding];
    case "DELETE_HOLDING":
      return [
        ...state.slice(0, action.id - 1),
        ...getHoldingIdsAfterDelete(state.slice(action.id))
      ];
    case "INC_SHARES":
      let incHolding = {
        ...state[action.id - 1],
        shares: state[action.id - 1].shares + 1
      };
      return [
        ...state.slice(0, action.id - 1),
        incHolding,
        ...state.slice(action.id)
      ];
    case "DEC_SHARES":
      let decHolding = {
        ...state[action.id - 1],
        shares: state[action.id - 1].shares - 1
      };
      return [
        ...state.slice(0, action.id - 1),
        decHolding,
        ...state.slice(action.id)
      ];
    default:
      return state;
  }
};

const getHoldingIdsAfterDelete = holdingsAfter => {
  return holdingsAfter.map(h => {
    return {
      ...h,
      id: h.id - 1
    };
  });
};

const App = () => {
  return (
    <Provider store={createStore(holdingsApp)}>
      <HoldingsTable />
    </Provider>
  );
};

export default App;
