"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const agregarTarea_1 = require("./utils/agregarTarea");
const buscarTarea_1 = require("./utils/buscarTarea");
const verTarea_1 = require("./utils/verTarea");
const leerYescribir_1 = require("./utils/leerYescribir");
const prompt = (0, prompt_sync_1.default)();
let tareas = (0, leerYescribir_1.leerTareas)();
let contador = tareas.length;
let opcion = -1;
while (opcion !== 0) {
    console.log("\n ---Menú de tareas--- ");
    console.log("¿Qué deseas hacer? ");
    console.log("[1] Ver mis tareas. ");
    console.log("[2] Buscar una tarea. ");
    console.log("[3] Agregar una tarea. ");
    console.log("[0] Salir. ");
    opcion = Number(prompt(">> "));
    switch (opcion) {
        case 1:
            (0, verTarea_1.verTarea)(tareas);
            break;
        case 2:
            (0, buscarTarea_1.buscarTarea)(tareas);
            break;
        case 3:
            contador = (0, agregarTarea_1.agregarTarea)(tareas, contador);
            break;
        case 0:
            console.log("👋 Saliendo...");
            break;
        default:
            console.log("⚠️ Opción inválida.");
    }
}
