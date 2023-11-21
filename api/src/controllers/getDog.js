const { Temperament, Dog } = require("../db");
const axios = require("axios");
const { apiKey } = process.env;

// [ ] GET /dogs:
// Obtener un listado de las razas de perro
// Debe devolver solo los datos necesarios para la ruta principal

const getDog = async (req, res) => {
  try {
    let findDbDog = await Dog.findAll({
      include: {
        model: Temperament,
      },
    });
    //console.log('findDbDog', findDbDog);

    let dbDog = findDbDog.map((e) => {
      return {
        id: e.id,
        name: e.name,
        min_weight: e.min_weight,
        max_weight: e.max_weight,
        min_height: e.min_height,
        max_height: e.max_height,
        life: e.life,
        image: e.image,
        createdOnDb: e.createdOnDb,
        temperament: e.temperaments
          ?.map((e) => e.name)
          .toString()
          .replace(/,/g, ", "),
      };
    });

    const api = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
    );
    const data = api.data;

    let filtrated = data.map((e) => {
      return {
        id: e.id ? e.id : "not available",
        name: e.name ? e.name : "not available",
        min_weight: e.weight.metric.split(" -")[0]
          ? Number(e.weight.metric.split(" -")[0])
          : 0,
        max_weight: e.weight.metric.split(" -")[1]
          ? Number(e.weight.metric.split(" -")[1])
          : 0,
        min_height: e.height.metric.split(" -")[0]
          ? Number(e.height.metric.split(" -")[0])
          : 0,
        max_height: e.height.metric.split(" -")[1]
          ? Number(e.height.metric.split(" -")[1])
          : 0,
        life: e.life_span ? e.life_span : "not available",
        //image: e.image.url ? e.image.url : "not available",
        createdOnDb: e.createdOnDb ? createdOnDb : false,
        temperament: e.temperament ? e.temperament : "not available",
        origin: e.origin ? e.origin : "not available",
      };
    });

    //console.log("filtrated", filtrated);
    let allDogs = filtrated.concat(dbDog);
    res.send(allDogs);

    console.log(`total Api ${data.length}`);
    console.log(`total DB ${dbDog.length}`);
    console.log(`total Dogs ${allDogs.length}`);
  } catch (error) {
    console.log(error);
    res.status(400).send({ "Fail getDog": error });
  }
};

module.exports = { getDog };
