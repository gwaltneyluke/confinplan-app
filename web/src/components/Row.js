import React from 'react';

const Row = (props) => {
    return (
        <tr>
            <td>{props.symbol}</td>
            <td>{props.marketValue}</td>
            <td>{props.targetPercent}</td>
            <td>{props.shares}</td>
            <td>{_getHoldingsValue(props)}</td>
            <td>{_calcActualPercent(props)}</td>
        </tr>
    )
}

const _calcActualPercent = (row) => {
    return _getHoldingsValue(row) / row.totalValue;
}

const _getHoldingsValue = (row) => {
    let value = row.marketValue * row.shares;
    return value.toFixed(2);
}

export default Row;