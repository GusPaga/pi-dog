const { Temperament, Dog } = require('../db');
const axios = require('axios');
const { apiKey } = process.env;

const findDogById = async (req, res) => {
    const { id } = req.params;

    try {
        if (isNaN(Number(id))) {
            //FIND DOG IN DB//
            const findInDb = await Dog.findAll({
                include: {
                    model: Temperament
                }
            })
            const filter = findInDb.filter((e) => e.id === id)

            const dogOfDb = filter.map((e) => {
                return {
                    id: e.id,
                    name: e.name,
                    min_weight: e.min_weight,
                    max_weight: e.max_weight,
                    min_height: e.min_height,
                    max_height: e.max_height,
                    life: e.life,
                    image: e.image,
                    temperament: (e.temperaments?.map(e => e.name)).toString().replace(/,/g, ", ")
                }
            })
            res.send(dogOfDb);
        }
        else {
            // FIND DOG BY ID  IN API //
            const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`);
            const data = api.data;
            const filter = data.filter((e) => e.id === Number(id))
            const dogOfApi = filter.map((e) => {
                return {
                    id: e.id ? e.id : 'not available',
                    name: e.name ? e.name : 'not available',
                    min_weight: e.weight.metric.split(' -')[0] ? Number(e.weight.metric.split(' -')[0]) : 0,
                    max_weight: e.weight.metric.split(' -')[1] ? Number(e.weight.metric.split(' -')[1]) : 0,
                    min_height: e.height.metric.split(' -')[0] ? Number(e.height.metric.split(' -')[0]) : 0,
                    max_height: e.height.metric.split(' -')[1] ? Number(e.height.metric.split(' -')[1]) : 0,
                    life: e.life_span ? e.life_span : 'not available',
                    image: e.image.url ? e.image.url : 'not available',
                    temperament: e.temperament ? e.temperament : 'not available',
                    origin: e.origin? e.origin: 'not available'
                }
            })
            res.send(dogOfApi);
        };
    } catch (error) {
        res.status(400).send({ 'Fail controllers findDogById': error })
    }
};
module.exports = { findDogById };




