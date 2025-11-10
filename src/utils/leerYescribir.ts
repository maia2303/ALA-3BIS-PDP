import * as fs from 'fs'; //permite leer y escribir archivos
import { Tarea } from "../models/tarea";

const archivo = "./tasks.json"; //indica la ruta del archivo que hay que leer

export function leerTareas(): Tarea[] {
    if (!fs.existsSync(archivo)) { //verifica que el archivo exista, si no existe devuelve un arreglo vacio
        return [];
    }
    try {
        const contenidoTareas = fs.readFileSync(archivo, "utf-8"); //try contiene lo que podría tener un error
        const tareasLeidas = JSON.parse(contenidoTareas) as Tarea[];
        for(const tarea of tareasLeidas) {
            if(!tarea.titulo || !tarea.dificultad || !tarea.estado || !tarea.creacion){ //solo puedo poner las validaciones de los campos que no puedan ser null
                console.log(" \n ⚠️ Error de formato: Una o más tareas no tienen los campos requeridos. ") // si no se cumplen las validaciones, no se va a poder leer el archivo
                return[];
            }
            const estadosValidos = ["pendiente", "en curso", "terminada", "cancelada"];
            if(!estadosValidos.includes(tarea.estado)){ // si no tuviera el estado en los que estan definidos, no se puede leer el archivo
                console.log("\n ⚠️ Error de formato: Estado inválido en el archivo leído.");
                return[];
            }
            const dificultadValida = [1, 2, 3];
            if(!dificultadValida.includes(tarea.dificultad)){ // la dificultad deben ser números del 1 al 3, si no, el archivo no se lee
                console.log("\n ⚠️ Error de formato: Dificultad inválida en el archivo leído.");
                return [];
            }
        }
        console.log(`✅ ${tareasLeidas.length} tareas cargadas correctamente!`);
        return tareasLeidas;
    } catch (error) { //se ejecuta solo si hay un error
        console.error("❌ Error al leer el archivo de tareas:", error);    
        return []
    } //try catch evita que el programa se pare por errores inesperados
}

export function escribirTareas(tareas: Tarea[]): void {
    try {
        const contenidoTareas = JSON.stringify(tareas, null, 2);
        fs.writeFileSync(archivo, contenidoTareas, "utf-8");
    } catch (error) {
        console.error("⚠️ Error al escribir el archivo de tareas:", error);   
    }
}