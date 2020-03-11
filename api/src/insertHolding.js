'use strict';

const { insertHolding } = require('./repository/ledgerRepository');
const uuid = require('uuid');

module.exports.handler = async event => {
  const userId = event.pathParameters.userId;
  const holdingId = uuid.v4();
  const newHolding = JSON.parse(event.body);

  console.log(`insertHolding.handler - userId: ${userId} holdingId: ${holdingId} newHolding: ${event.body}`);

  await insertHolding(userId, holdingId, newHolding);

  return {
    statusCode: 200,
    body: `holding inserted successfully`
  };
};