const catchError = require('../utils/catchError');
const axios = require('axios');

const getAll = catchError(async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        return res.json(response.data);
    } catch (error) {
        console.error('Error fetching countries:', error);
        return res.status(500).json({ message: 'An error occurred while fetching countries' });
    }
});

const getInfo = catchError(async (req, res) => {
    const { data1, data2, data3 } = req.params;
    
    try {
        let url = `https://countriesnow.space/api/v0.1/${data1}/${data2}`;
        if (data3) {
            url += `/${data3}`;
        }

        const response = await axios.get(url);
        return res.json(response.data);
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return res.status(500).json({ message: 'An error occurred while fetching data' });
    }
});


module.exports = {
    getAll,
    getInfo
};
