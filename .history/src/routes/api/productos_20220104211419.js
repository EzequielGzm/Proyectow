const express = require('express');
const router = express.Router();
const productosControllerApi = require('../../controllers/api/productsControllerApi');

// RUTAS

router.get("/ejemplo", productosControllerApi.ejemplo)

module.exports = router;