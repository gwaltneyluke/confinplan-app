'use strict';

const { deleteHolding } = require('./repository/ledgerRepository');

module.exports.handler = async event => {
  const userId = event.pathParameters.userId;
  const holdingId = event.pathParameters.holdingId;

  console.log(`deleteHolding.handler - userId: ${userId} holdingId: ${holdingId}`);

  await deleteHolding(userId, holdingId);

  return {
    statusCode: 200,
    body: `holding deleted successfully`
  };
};