const catchError = require('../utils/catchError');
const axios = require('axios');


    const getAll = catchError(async (req, res) => {
    const { data1, data2 } = req.params;

    if (data1 !== 'population' && data1 !== 'flag') {

    let url = `https://date.nager.at/api/v3/${data1}`;

        if (data2) {
            url += `/${data2}`;
        }

    try {
        

        const response = await axios.get(url);
        return res.json(response.data);
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return res.status(500).json({ message: 'An error occurred while fetching data' });
    }
}else{
    
    let url = `https://countriesnow.space/api/v0.1/countries/${data1}`;
    if (data2) {
        url += `/${data2}`;
    }

try {
    

    const response = await axios.get(url);
    return res.json(response.data);
} catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return res.status(500).json({ message: 'An error occurred while fetching data' });
}

}}); 

const getInfo = catchError(async (req, res) => {
    const { data1, data2 } = req.params;

    if (data1 === 'population' || 'flag') {

    let url = `https://countriesnow.space/api/v0.1/countries/${data1}`;
        if (data2) {
            url += `/${data2}`;
        }
    
    try {
        

        const response = await axios.get(url);
        return res.json(response.data);
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return res.status(500).json({ message: 'An error occurred while fetching data' });
    }
}});


module.exports = {
    getAll,
    getInfo
};
