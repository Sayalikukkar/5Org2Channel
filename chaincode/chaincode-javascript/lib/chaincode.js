/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class Chaincode extends Contract {
        //1 initledger
        //2 set message
        //3 get message

        async initLedger(ctx) {
            await ctx.stub.putState("test","My program")
            return "sucess"
        }

        async setMessage(ctx, key, message) {
            await ctx.stub.putState(key, message)
            return message;
        }

        async getMessage(ctx, key){
            var response = await ctx.stub.getState(key);
            return response.toString()
        }
}
module.exports = Chaincode;