"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarTarea = agregarTarea;
const tarea_1 = require("../models/tarea");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const leerYescribir_1 = require("./leerYescribir");
const prompt = (0, prompt_sync_1.default)();
function agregarTarea(tareas, contadorActual) {
    let titulo = "";
    while (titulo.trim() === "") {
        titulo = prompt("Ingrese el título: ");
    }
    const descripcion = prompt("Ingrese la descripción: ");
    const estado = "pendiente";
    let dificultad = Number(prompt("[1] Fácil  [2] Medio  [3] Difícil  "));
    if (![1, 2, 3].includes(dificultad)) {
        dificultad = 1;
        console.log("⚠️ Dificultad inválida, se asignara Fácil.");
    }
    const vencimiento = prompt("Fecha de vencimiento: dd/mm/aaaa: ");
    const nueva = (0, tarea_1.crearTarea)(titulo, descripcion, estado, dificultad, vencimiento);
    tareas[contadorActual] = nueva;
    contadorActual++;
    (0, leerYescribir_1.escribirTareas)(tareas);
    console.log("¡Tarea agregada con éxito! ✅");
    return contadorActual;
}
