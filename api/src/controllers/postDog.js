const { Temperament, Dog } = require('../db');

// [ ] POST /dog:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
// Crea una raza de perro en la base de datos

const postDog = async (req, res) => {
    try {
        const { name, min_weight, max_weight, min_height, max_height, life, image, createdOnDb, temperament } = req.body;

        let findDog = await Dog.findOne({
            where: {
                name,
                life,
                image,
            }
        })

        let addTemperament = await Temperament.findAll({ where: { name: temperament } });

        if (!findDog) {
            let newDog = await Dog.create({
                name,
                min_weight,
                max_weight,
                min_height,
                max_height,
                life,
                image,
            })
            await newDog.addTemperament(addTemperament);
            //console.log(newDog)
            res.send('Dog Created');
        }

        else {
            await findDog.addTemperament(addTemperament);
            res.send('This Dog is Exists');
        }
        // let addTemperament = await Temperament.findAll({ where: { name } })
        // res.send('Dog Created')

    } catch (error) {
        res.status(400).send({ "Fail addDog": error })
    }
};

module.exports = { postDog };