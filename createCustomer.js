'use strick'
// import { createRequire } from 'module'
// const require = createRequire(import.meta.url);
const AWS = require('aws-sdk')
/// import AWS from "aws-sdk"

module.export.createCustomer = async(event) => {
    const body = JSON.parse(Buffer.from(event.body, 'base64').toString())
    const dynamoDb = new AWS.DynamoDB.DocumentClient()
    const putParams = {
        TableName: ProcessingInstruction.env.DYNOMODB_CUSTOMER_TABLE,
        Item: {
            primary_key: body.name,
            email: body.email
        }
    }
    await dynamoDb.put(putParams).promise()

    return {
        statusCode: 201
    }
}