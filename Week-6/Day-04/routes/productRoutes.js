const express = require("express");
const router = express.Router();

const {
getAllProducts,
getProductById,
updateProduct,
deleteProduct,
createProduct,
filterProducts
} = require("../controllers/productController");

// CRUD endpoints
router.get("/", getAllProducts);
router.get("/filter", filterProducts);
router.get("/:id", getProductById);

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


module.exports = router;
