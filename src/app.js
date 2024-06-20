import express from "express";
import productRouter from "./router/product.router.js";
import cartRouter from "./router/cart.router.js";

const app = express();
app.use(express.json()); // este middleware perite obtener archivos JSON //
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", productRouter);
app.use("/api", cartRouter);

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
