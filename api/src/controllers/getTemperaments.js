const { Temperament, Dog } = require("../db");
const axios = require("axios");
const { apiKey } = process.env;

const getTemp = async (req, res) => {
  try {
    let getTempDb = await Temperament.findAll({
      include: { model: Dog },
    });

    let tempDb = getTempDb.map((e) => {
      return {
        id: e.id,
        name: e.name,
      };
    });
    res.send(tempDb);
  } catch (error) {
    res.status(400).send({ "Fail getTemp": error });
  }
};

//GET TEMPERAMENTS FROM THE API AND THEN SEND TO DB //
const getTemperaments = async () => {
  try {
    const apiInfo = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
    );
    const allDog = apiInfo.data;

    let filtrated = allDog.map((e) => e.temperament);
    let joinReplace = filtrated.join(", ").replace(/ /g, "");
    let separeted = joinReplace.split(",");
    for (let i = 0; i < separeted.length - 1; i++) {
      await Temperament.findOrCreate({
        where: { name: separeted[i] },
      });
    }
    //console.log('filtrated', filtrated)

    // CLEAN REPIATED //
    let repited = separeted.filter(
      (item, index, arr) => arr.indexOf(item) === index
    );

    // CLEAN EMPTY ELEMENTS //
    let noEmpty = repited.filter((e) => e !== "");

    // PUSH IN DB //
    for (let i = 0; i < noEmpty.length - 1; i++) {
      await Temperament.findOrCreate({
        where: { name: noEmpty[i] },
      });
    }
  } catch (error) {
    res.status(400).send({ "Fail getTemperaments": error });
  }
};

module.exports = { getTemp, getTemperaments };
