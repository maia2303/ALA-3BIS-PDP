import * as fs from 'fs'; //permite leer y escribir archivos
import { Tarea, Estado, Dificultad } from "../models/tarea";

const archivo = "./tasks.json"; //indica la ruta del archivo que hay que leer

const estadosValidos = ["pendiente", "en curso", "terminada", "cancelada"];
const dificultadValida: Dificultad[] = [1, 2, 3];

export function leerTareas(): Tarea[] {
    if (!fs.existsSync(archivo)) { //verifica que el archivo exista, si no existe devuelve un arreglo vacio
        return [];
    }
    try {
        const contenidoTareas = fs.readFileSync(archivo, "utf-8"); //try contiene lo que podría tener un error
        const tareasLeidas = JSON.parse(contenidoTareas) as Tarea[];
        for(const tarea of tareasLeidas) {
            if(!tarea.titulo || !tarea.estado || !tarea.creacion){ //solo puedo poner las validaciones de los campos que no puedan ser null
                console.error(" \n ⚠️ Error de formato: Una o más tareas no tienen los campos requeridos. ") // si no se cumplen las validaciones, no se va a poder leer el archivo
                return[];
            }
            
            if(!estadosValidos.includes(tarea.estado)){
               console.log("\n ⚠️ Error de formato: Estado inválido en el archivo leído."); 
               return [];
            }
            if(!dificultadValida.includes(tarea.dificultad)){ // la dificultad deben ser números del 1 al 3, si no, el archivo no se lee
                console.log("\n ⚠️ Error de formato: Dificultad inválida en el archivo leído. Lebe ser un número válido (1, 2 o 3).");
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