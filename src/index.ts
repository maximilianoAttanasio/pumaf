import path from "path";
import express from "express";
import bodyParser from "body-parser";
import fs from 'fs';


const app = express();
const PORT = 3001;

// console.log('Sirviendo estáticos desde:', path.join(__dirname, 'dist'));
// console.log('¿Existe FuncionesApi.js?:',
//   require('fs').existsSync(path.join(__dirname, 'dist', 'services', 'FuncionesApi.js'))
// );

// Middleware para servir archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, "public")));

// app.use("/services", express.static(path.join(__dirname, "dist", "services")));

// ----> Esto sube un nivel: de PUMA/src a PUMA
const projectRoot = path.join(__dirname, '..');

// Opcional: comprueba con un log
console.log('Project root is:', projectRoot);
console.log(
  'dist/services/FuncionesApi.js existe?',
  fs.existsSync(path.join(projectRoot, 'dist', 'services', 'FuncionesApi.js'))
);

// 1) Sirvo la carpeta dist/ al prefijo /dist
app.use(
  '/dist',
  express.static(path.join(projectRoot, 'dist'))
);

// 2) Sirvo la carpeta public/ para tus assets, HTML, CSS, etc.
// app.use(express.static(path.join(__dirname, 'public')));

// Middleware específico para scripts (asegura que los archivos .js tengan el MIME correcto)
// app.use(
//   "/services",
//   express.static(path.join(__dirname, "public", "services"), {
//     setHeaders: (res, path) => {
//       if (path.endsWith(".js")) {
//         res.setHeader("Content-Type", "application/javascript");
//       }
//     },
//   })
// );

// Middleware para parsear JSON
app.use(bodyParser.json());

// Ruta principal para servir el archivo index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
