//Acá hacemos la conexión con MONGODB: 

//1) Instalamos mongoose: npm i mongoose. 
const mongoose = require("mongoose");

//2) Crear una conexión con la base de datos




mongoose
  .connect("mongodb+srv://catalinakrenz3316:coderhouse@cluster0.w8yg92g.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0 ")
  .then(() => console.log("Conexion exitosa"))
  .catch(() => console.log("Error en la conexion"));

