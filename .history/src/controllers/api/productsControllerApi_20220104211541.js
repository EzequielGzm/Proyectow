const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const ApiProductController = {
  list: (req, res) => {
    db.Producto.findAll()
    .then(productos =>)
}
  
};

module.exports = ApiProductController;
