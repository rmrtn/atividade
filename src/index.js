import dotenv from "dotenv";
import express from "express";
import roteadorLogin from "./routes/login.js";
import roteadorUsuario from "./routes/usuario.js";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(roteadorLogin);
app.use(roteadorUsuario);

app.get("/", (req, res) => {
  res.json({
    message: "Raissa Martins",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});