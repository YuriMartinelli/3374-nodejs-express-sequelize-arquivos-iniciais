const express = require("express");
const pessoas = require("./pessoasRoute.js");
const categorias = require("./cursosRoute.js");
const cursos = require("./categoriasRoute.js");

module.exports = (app) => {
  app.use(express.json(), pessoas, categorias, cursos);
};
