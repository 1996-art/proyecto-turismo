# 📋 DOCUMENTACIÓN DE SERVICIOS — PROYECTO TURÍSTICO
URL Base: http://localhost:3000

═══════════════════════════════════════════
🔹 1️⃣ OBTENER TODOS LOS LUGARES
═══════════════════════════════════════════
Método: GET
Ruta: /api/lugares
¿Qué hace? Devuelve la lista completa de lugares turísticos
Respuesta exitosa: Código 200 ✅

═══════════════════════════════════════════
🔹 2️⃣ BUSCAR UN LUGAR
═══════════════════════════════════════════
Método: GET
Ruta: /api/lugares/:id
Ejemplo: /api/lugares/1
¿Qué hace? Muestra los datos de UN solo lugar
Respuesta exitosa: Código 200 ✅ — No encontrado: 404 ❌

═══════════════════════════════════════════
🔹 3️⃣ AGREGAR LUGAR NUEVO
═══════════════════════════════════════════
Método: POST
Ruta: /api/lugares
Datos que envía:
{
  "nombre": "Nombre del lugar",
  "ubicacion": "Ciudad o zona",
  "descripcion": "Breve descripción"
}
Respuesta exitosa: Código 201 ✅

═══════════════════════════════════════════
🔹 4️⃣ MODIFICAR LUGAR EXISTENTE
═══════════════════════════════════════════
Método: PUT
Ruta: /api/lugares/:id
Ejemplo: /api/lugares/1
Datos: igual que el de arriba
Respuesta exitosa: Código 200 ✅ — No encontrado: 404 ❌

═══════════════════════════════════════════
🔹 5️⃣ ELIMINAR LUGAR
═══════════════════════════════════════════
Método: DELETE
Ruta: /api/lugares/:id
Ejemplo: /api/lugares/1
¿Qué hace? Borra el lugar indicado
Respuesta exitosa: Código 200 ✅ — No encontrado: 404 ❌
