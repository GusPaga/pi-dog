const { Temperament, Dog } = require('../db');
const axios = require('axios');
const { apiKey } = process.env;


// [ ] GET /dogs?name="...":
// Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
// Si no existe ninguna raza de perro mostrar un mensaje adecuado

// FUNCTION TO COMPARE WORD BY WORD AND FIND THE CORRECT NAME //
function FindNeedle(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, needle.length + i) === needle) return i;
    }
    return -1;
};

const findDogByName = async (req, res) => {
    const { name } = req.query;
    try {
        if (!name) {
            res.send('should write a name')
        } else if (name) {

            //FIND IN DB //
            let searchDb = await Dog.findAll({
                include: [{
                    model: Temperament,
                }]
            });

            let filterDb = searchDb.filter((e) => {
                if (FindNeedle(e.name.toLowerCase(), name.toLowerCase()) > -1) {
                    return (e);
                }
            });

            const dogOfDb = filterDb.map((e) => {
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
            });

            //FIND IN API //
            const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`);
            const data = api.data;

            const filter = data.filter((e) => {
                if (FindNeedle(e.name.toLowerCase(), name.toLowerCase()) > -1) {
                    return (e);
                }
            });

            const dogOfapi = filter.map((e) => {
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
                }
            });
            const totalDog = dogOfapi.concat(dogOfDb)
            res.send(totalDog);
        }
        else {
            res.status(400).send('Do not exists this Breed!')
        }

    } catch (error) {
        res.status(400).send({ 'Fail controllers findDogByName': error })
    }
};

module.exports = { findDogByName };