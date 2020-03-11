'use strict';

const { insertHolding } = require('./repository/ledgerRepository');

module.exports.handler = async event => {
  const userId = event.pathParameters.userId;
  const holdingId = event.pathParameters.holdingId;
  const updateHolding = JSON.parse(event.body);

  console.log(`updateHolding.handler - userId: ${userId} holdingId: ${holdingId} updateHolding: ${event.body}`);

  await insertHolding(userId, holdingId, updateHolding);

  return {
    statusCode: 200,
    body: `holding updated successfully`
  };
};