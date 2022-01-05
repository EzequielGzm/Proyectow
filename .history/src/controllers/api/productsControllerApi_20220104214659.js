const { promiseImpl } = require("ejs");
const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const ApiProductController = {
  list: (req, res) => {
    let promesaProducto = db.Producto.findAll({
      where: { deleted: 0 },
      include: [
        {
          model: db.Marca,
          as: "marca",
        },
        {
          model: db.Categoria,
          as: "categoria",
        },
        {
          model: db.SubCategoria,
          as: "subcategoria",
        },
      ],
    });
    let promesaCategoriaPr = db.Categoria.count({
      include: [
        {
          model: db.Producto,
          as: "producto",
        },
      ],
      group: ["nombre"],
    });
      
    Promise.all([promesaProducto,promesaCategoriaPr])
    .then(([productos,categorias]) => {
      total.forEach(objCat => {

        let cat = total.find(obj =>
            obj.nombre == objCat.nombre
        )
        totalByCategory.push({
            [cat.nombre]: cat.count
        })
    })
    let json = {
      meta: { length: productos.length },
      datos: { productos,categorias },
    };
    res.json(json);

    })

  },
};

module.exports = ApiProductController;