const express = require('express');
const router = express.Router();
const productosAPIController = require('../../controllers/api/productsControllerApi');

// RUTAS

router.get("/api/productos", ApiProductController.list)