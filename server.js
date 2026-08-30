server.js
// Servidor API — Proyecto Turístico
const express = require('express');
const app = express();
const puerto = 3000;

// Leer datos en formato JSON
app.use(express.json());
app.use(express.static('public')); // Carpeta con tu página web

// Base de datos de ejemplo — Lugares turísticos
let lugares = [
  { id: 1, nombre: 'Parque Principal', ubicacion: 'Centro', descripcion: 'Zona histórica', imagen: '' },
  { id: 2, nombre: 'Mirador del Sol', ubicacion: 'Zona alta', descripcion: 'Vistas panorámicas', imagen: '' }
];

// ✅ SERVICIO 1 — OBTENER TODOS LOS LUGARES
app.get('/api/lugares', (req, res) => {
  res.json(lugares);
});

// ✅ SERVICIO 2 — OBTENER UN LUGAR POR ID
app.get('/api/lugares/:id', (req, res) => {
  const lugar = lugares.find(l => l.id === parseInt(req.params.id));
  if (!lugar) return res.status(404).json({mensaje: 'Lugar no encontrado'});
  res.json(lugar);
});

// ✅ SERVICIO 3 — AGREGAR NUEVO LUGAR
app.post('/api/lugares', (req, res) => {
  const nuevoLugar = {
    id: lugares.length + 1,
    nombre: req.body.nombre,
    ubicacion: req.body.ubicacion,
    descripcion: req.body.descripcion
  };
  lugares.push(nuevoLugar);
  res.status(201).json({mensaje: 'Lugar agregado', datos: nuevoLugar});
});

// ✅ SERVICIO 4 — MODIFICAR LUGAR
app.put('/api/lugares/:id', (req, res) => {
  const lugar = lugares.find(l => l.id === parseInt(req.params.id));
  if (!lugar) return res.status(404).json({mensaje: 'Lugar no encontrado'});
  
  lugar.nombre = req.body.nombre || lugar.nombre;
  lugar.ubicacion = req.body.ubicacion || lugar.ubicacion;
  lugar.descripcion = req.body.descripcion || lugar.descripcion;
  res.json({mensaje: 'Lugar actualizado', datos: lugar});
});

// ✅ SERVICIO 5 — ELIMINAR LUGAR
app.delete('/api/lugares/:id', (req, res) => {
  const indice = lugares.findIndex(l => l.id === parseInt(req.params.id));
  if (indice === -1) return res.status(404).json({mensaje: 'Lugar no encontrado'});
  
  lugares.splice(indice, 1);
  res.json({mensaje: 'Lugar eliminado'});
});

// Encender servidor
app.listen(puerto, () => {
  console.log(`Servidor en http://localhost:${puerto}`);
  console.log('Rutas disponibles:');
  console.log('GET    /api/lugares');
  console.log('GET    /api/lugares/:id');
  console.log('POST   /api/lugares');
  console.log('PUT    /api/lugares/:id');
  console.log('DELETE /api/lugares/:id');
});
