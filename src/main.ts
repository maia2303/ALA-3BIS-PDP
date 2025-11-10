import PromptSync from "prompt-sync";
import { Tarea } from "./models/tarea";
import { agregarTarea } from "./utils/agregarTarea";
import { buscarTarea } from "./utils/buscarTarea";
import { verTarea } from "./utils/verTarea";
import { leerTareas } from "./utils/leerYescribir";
import { escribirTareas } from "./utils/leerYescribir";

const prompt = PromptSync();
let tareas: Tarea[] = leerTareas();
let contador: number = tareas.length; // las tareas inician en -1

let opcion: number = -1;

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
            verTarea(tareas);
            break;
        case 2:
            buscarTarea(tareas);
            break;
        case 3:
            contador = agregarTarea(tareas, contador);
            break;
        case 0:
            console.log("👋 Saliendo...");
            break;
        default:
            console.log("⚠️ Opción inválida.");    
    }
}