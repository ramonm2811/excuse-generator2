/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let articulo = ["Un", "El"];
  let sujeto = ["pollo", "señor", "perro", "loco", "niño"];
  let accion = ["tomo", "me lanzó", "dijo que", "me robó", "me mordió"];
  let que = ["la tarea", "el telefono", "el carro", "el zapato"];
  let donde = ["en la calle", "en mi casa", "en el metro"];

  let proIndx = Math.floor(Math.random() * articulo.length);
  let subjIndx = Math.floor(Math.random() * sujeto.length);
  let actIndx = Math.floor(Math.random() * accion.length);
  let possIndx = Math.floor(Math.random() * que.length);
  let wheIndx = Math.floor(Math.random() * donde.length);

  return (
    articulo[proIndx] +
    " " +
    sujeto[subjIndx] +
    " " +
    accion[actIndx] +
    " " +
    que[possIndx] +
    " " +
    donde[wheIndx]
  );
};
