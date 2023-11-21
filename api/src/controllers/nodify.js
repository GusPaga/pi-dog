const { Temperament, Dog } = require("../db");

const modify = async (req, res) => {
  try {
    const {
      name,
      min_weight,
      max_weight,
      min_height,
      max_height,
      life,
      image,
      createdOnDb,
      temperament,
    } = req.body;

    await Dog.update(
      {
        name,
        min_weight,
        max_weight,
        min_height,
        max_height,
        life,
        image,
        temperament,
      },
      { where: { id } }
    );

    res.send("Dog modificated");
  } catch (error) {
    res.status(400).send({ "Fail modify": error });
  }
};

module.exports = { modify };
