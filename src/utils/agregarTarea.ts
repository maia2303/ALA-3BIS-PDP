import { Tarea} from "../models/tarea";
import { crearTarea } from "../models/tarea";
import PromptSync from "prompt-sync";
import { escribirTareas } from "./leerYescribir";
const prompt = PromptSync();

export function agregarTarea(tareas: Tarea[], contadorActual: number): number {
    let titulo = "";
    while (titulo.trim() === ""){
        titulo = prompt("Ingrese el título: ");
    }
    const descripcion = prompt ("Ingrese la descripción: ")
    const estado = "pendiente";
    let dificultad = Number(prompt("[1] Fácil  [2] Medio  [3] Difícil  "))  as 1 | 2 | 3;
    
    if(![1, 2, 3].includes(dificultad)){
        dificultad = 1;
        console.log("⚠️ Dificultad inválida, se asignara Fácil.");
    }

    const vencimiento = prompt("Fecha de vencimiento: dd/mm/aaaa: ");
    const nueva = crearTarea(titulo, descripcion, estado, dificultad, vencimiento);
    
    tareas[contadorActual] = nueva;
    contadorActual++;

    escribirTareas(tareas);

    console.log("¡Tarea agregada con éxito! ✅")
    return contadorActual;
}