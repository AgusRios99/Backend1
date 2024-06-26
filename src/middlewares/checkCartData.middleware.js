import cartManager from "../managers/cartManager.js";

export const checkCartData = async (req, res, next) => {
  try {
    const { cid } = req.params;
    const carts = await cartManager.getCarts();

    const cart = carts.find((c) => c.id === cid);
    if (!cart)
      return res
        .status(404)
        .json({ status: "error", msg: "Carrito no encontrado" });

    next();

  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "error", msg: "Error interno del servidor" });
  }
};
