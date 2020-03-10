import React, { useEffect, useState } from 'react';
import Row from './Row';
import getQuote from '../utilities/quoter';

const Planner = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const getRows = async () => {
            let planner = await _generatePlanner(test);
            setRows(planner);
        };
        getRows();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Market Value</th>
                    <th>Target %</th>
                    <th>Current Shares</th>
                    <th>Holdings Value</th>
                    <th>Actual %</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};

const _generatePlanner = async (rows) => {
    const planner = [];
    let plannerPromises = rows.map(async (row, id) => {
        let marketValue = await getQuote(row.symbol);
        planner.push(
            <Row
                key={id}
                symbol={row.symbol}
                marketValue={marketValue}
                targetPercent={row.targetPercent}
                shares={row.shares}
                totalValue={_getTotalValue(rows)}
            />
        );
    });
    await Promise.all(plannerPromises);
    return planner;
};

const _getTotalValue = (rows) => {
    return rows.reduce((totalValue, row) => {
        return totalValue += (row.shares * row.marketValue);
    }, 0);
}

export default Planner;