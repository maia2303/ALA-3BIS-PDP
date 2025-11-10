"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerTareas = leerTareas;
exports.escribirTareas = escribirTareas;
const fs = __importStar(require("fs")); //permite leer y escribir archivos
const archivo = "./tasks.json"; //indica la ruta del archivo que hay que leer
function leerTareas() {
    if (!fs.existsSync(archivo)) { //verifica que el archivo exista, si no existe devuelve un arreglo vacio
        return [];
    }
    try {
        const contenidoTareas = fs.readFileSync(archivo, "utf-8"); //try contiene lo que podría tener un error
        const tareasLeidas = JSON.parse(contenidoTareas);
        for (const tarea of tareasLeidas) {
            if (!tarea.titulo || !tarea.dificultad || !tarea.estado || !tarea.creacion) {
                console.log(" \n ⚠️ Error de formato: Una o más tareas no tienen los campos requeridos. ");
                return [];
            }
        }
        console.log(`✅ ${tareasLeidas.length} tareas cargadas correctamente!`);
        return tareasLeidas;
    }
    catch (error) { //se ejecuta solo si hay un error
        console.error("❌ Error al leer el archivo de tareas:", error);
        return [];
    } //try catch evita que el programa se pare por errores inesperados
}
function escribirTareas(tareas) {
    try {
        const contenidoTareas = JSON.stringify(tareas, null, 2);
        fs.writeFileSync(archivo, contenidoTareas, "utf-8");
    }
    catch (error) {
        console.error("⚠️ Error al escribir el archivo de tareas:", error);
    }
}
