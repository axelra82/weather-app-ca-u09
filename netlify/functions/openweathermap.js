'use strict';
const axios = require('axios');
const countryList = require('../../country-names.json');

exports.handler = async data => {

    let statusCode;
    let responseBody;

    const { direction, search } = JSON.parse(data.body);

    const apiUrl = process.env.REACT_APP_OWM_API_URL;
    const apiKey = process.env.REACT_APP_OWM_API_KEY;
    const endpointSettings = `&limit=5&appid=${apiKey}`;
    let endpointUrl;

    // Set up API request
    switch (direction) {
        case 'direct':
            endpointUrl = `${apiUrl}/geo/1.0/direct?q=${search.str}${endpointSettings}`;
            break;

        case 'reverse':
            endpointUrl = `${apiUrl}/geo/1.0/reverse?lat=${search.lat}&lon=${search.lon}${endpointSettings}`;
            break;
    }

    const settings = {
        method: 'get',
        url: endpointUrl,
    }
    
    try {
        // Response from request
        const request = await axios(settings);
        
        // Success object
        statusCode = 200;
        
        switch (direction) {
            case 'direct':
                responseBody = JSON.stringify(request.data);
                break;
    
            case 'reverse':
                const responseData = request.data[0];
                const countryName = countryList.data.find(country => country.code === responseData.country);
                
                responseBody = JSON.stringify({
                    name: responseData.name,
                    country: countryName.name,
                    code: responseData.country,
                });

                break;
        }

    } catch (err) {
        // Error response
        statusCode = 403;
        responseBody = err;
    }

    // Return response
    return {
        statusCode: statusCode,
        body: responseBody,
    }
}