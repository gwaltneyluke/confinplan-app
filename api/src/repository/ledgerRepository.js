'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-8-10' });

const deleteHolding = (userId, holdingId) => {
    const params = {
        TableName: process.env.holdingsLedger,
        Key: {
            UserId: userId,
            HoldingId: holdingId
        }
    };
    return docClient.delete(params).promise();
}

const insertHolding = (userId, holdingId, holdingDetails) => {
    const params = {
        TableName: process.env.holdingsLedger,
        Item: {
            UserId: userId,
            HoldingId: holdingId,
            Symbol: holdingDetails.symbol,
            TargetPercent: holdingDetails.targetPercent,
            Shares: holdingDetails.shares
        }
    };
    return docClient.put(params).promise();
}

module.exports = {
    deleteHolding,
    insertHolding
};