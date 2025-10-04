// backend/src/app.ts
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

// 1. Configuración del Servidor
const app = express();
// Puerto: busca en las variables de entorno o usa 3001 por defecto
const PORT = process.env.PORT || 3001; 

// 2. Middlewares Globales
// Ejecución secuencial (similar al pipeline de peticiones de .NET)
app.use(helmet());            // Seguridad (headers HTTP)
app.use(cors());              // Permite la comunicación con el frontend
app.use(morgan('dev'));       // Logging en consola
app.use(express.json());      // Permite leer el cuerpo de las peticiones en formato JSON (como un [FromBody])

// 3. Tu Primer Endpoint (Ruta)
// Esto es similar al método [HttpGet] en un controlador de ASP.NET
app.get('/', (req: Request, res: Response) => {
    // res.json() envía una respuesta JSON con código de estado 200 (equivalente a return Ok(data);)
    res.json({ 
        message: "¡AtlasSync API funcionando! Versión: 1.0",
        path: "/api/files (Próxima ruta)"
    });
});

// 4. Iniciar el Servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor AtlasSync corriendo en http://localhost:${PORT}`);
    console.log('Presiona CTRL+C para detenerlo');
});