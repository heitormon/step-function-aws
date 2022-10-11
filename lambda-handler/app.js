// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.inputFunction = async (event, _) => {
    try {
        console.log("inputFunction")
        console.log("event: ", event)
    } catch (err) {
        console.log(err);
        return err;
    }
    const items = [];
    for (i = 0; i <= 4; i++) {
        let item = []
        for (j = 0; j <= getRandomArbitrary(10, 50); j++) {
            item.push("blob")
        }
        items.push(item)
    }
    return { items }
};

exports.producerFunction = async (event, _) => {
    try {
        console.log("producerFunction")
        console.log("event: ", event.length)
        await new Promise(r => setTimeout(r, event.length * 1000));
        console.log(`producerFunction ${event.length} finalizado`)
    } catch (err) {
        console.log(err);
        return err;
    }

    return { message: "producerFunction" }
};

exports.transferFunction = async (event, _) => {
    try {
        console.log("transferFunction")
        console.log("event: ", event)
    } catch (err) {
        console.log(err);
        return err;
    }

    return { message: "Bye World" }
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}