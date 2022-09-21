const { Temperament, Dog } = require('../db');

const erase = async (req, res) => {
    try {      
        const { id } = req.params;
        await Dog.destroy({ where: {id} });
        res.send('Dog erased');

    } catch (error) {
        res.status(400).send({ "Fail erase": error })
    }
};
module.exports = { erase };