const https = require('https');

const apikey = 'XC57O6RNEI6T5EUQ';

const getQuote = async (symbol) => {
    try {
        const url = _generateUrl('https://www.alphavantage.co', {
            function: 'GLOBAL_QUOTE',
            symbol: symbol,
            apikey: apikey
        });
        const response = await _get(url);
        console.log(`quote.getQuote - response: ${JSON.stringify(response)}`);
        console.log(response['Global Quote']['05. price']);
        return response['Global Quote']['05. price'];
    } catch (err) {
        console.error(`quote.getQuote - error: ${err}`);
        throw err;
    }
}

const _get = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            res.setEncoding('utf-8');
            let rawData = '';
            res.on('data', (d) => {
                rawData += d;
            });
            res.on('end', () => {
                resolve(JSON.parse(rawData));
            });
        }).on('error', (err) => {
            console.error(`quote._get - error: ${err}`);
            reject(err);
        });
    })
}

const _generateUrl = (baseUrl, queryParams) => {
    let queryString = `${baseUrl}/query?`;
    for (let param in queryParams) {
        queryString += `${param}=${queryParams[param]}&`;
    }
    console.log(queryString.slice(0, -1));
    return queryString.slice(0, -1);
}

export default getQuote;