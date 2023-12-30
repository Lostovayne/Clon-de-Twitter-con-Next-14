# Clon de Twitter


## Ruta del Proyecto 

El proyecto tiene esta pensado para ser ejecutado en un entorno de desarrollo , implemendando los server actions de Next 14 junto a prisma y tailwind. Para lograr buenos estilos al mismo tiempo que una coneccion directa con la base de datos. 

Este es un clon de Twitter creado utilizando las siguientes tecnologías:


- Tailwind CSS: un framework de CSS utilitario que permite una fácil personalización y diseño receptivo.
- TypeScript: un lenguaje de programación que agrega tipos estáticos opcionales a JavaScript, lo que mejora la calidad y la mantenibilidad del código.
- Next.js 14: un marco de desarrollo de React que permite crear aplicaciones web rápidas y escalables con renderizado del lado del servidor (SSR) y generación de páginas estáticas (SSG).
- Prisma: un ORM (Object-Relational Mapping) para bases de datos que proporciona una forma sencilla de interactuar con la base de datos utilizando un lenguaje de consulta tipo SQL.
- Docker: una plataforma de contenedores que permite empaquetar y distribuir aplicaciones junto con todas sus dependencias en un contenedor ligero y portátil.
- PostgreSQL: un sistema de gestión de bases de datos relacional de código abierto y potente.

## Configuración del proyecto

Siga estos pasos para configurar y ejecutar el clon de Twitter:

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```


2. Instalar las dependencias:

   ```bash
   cd tu-repositorio
   npm install
   ```
3. Configurar la base de datos:

- Asegúrese de tener PostgreSQL instalado y ejecutándose en su sistema.
- Copie el archivo .env.example a .env y actualice las variables de entorno con la configuración de su base de datos.

4. Ejecutar las migraciones de la base de datos:

   ```bash
   npx prisma migrate dev
   ```

5. Iniciar la aplicación:

   ```bash
   npm run dev
   ```
- La aplicación estará disponible en http://localhost:3000.



## Features

-  Crear sistema de autenticacion, falta definir proovedores 
- 🌎 Next.js 14: Crea una aplicación web de React para tu proyecto.
- 🎨 ShadCn: Crea una aplicación web de React para tu proyecto usando Shadcn.

- 🐳 Docker: Utiliza Docker para facilitar la creación y gestión de contenedores para tu proyecto.
- 🥇 Prisma: Integra Prisma como una capa de abstracción de la base de datos para facilitar el acceso y la manipulación de los datos.
- 📂 PostgreSQL 15: Utiliza PostgreSQL 15 como tu sistema de gestión de base de datos para almacenar los datos de tu proyecto.
- 🔗 Relaciones: Crea las relaciones necesarias entre las tablas de tu base de datos para establecer las conexiones lógicas entre los datos.

- Queda como algo futuro agregar testing 

¡Estos son solo algunos de los features que puedes añadir a tu proyecto! Si tienes alguna pregunta específica sobre cómo implementar alguno de ellos, no dudes en preguntar.




Contribución
Si desea contribuir a este proyecto, siga estos pasos:

Fork el repositorio.
Cree una rama para su función o corrección de errores: git checkout -b mi-rama.
Realice los cambios necesarios y realice los commits: git commit -am 'Agregue una nueva función'.
Envíe los cambios a su repositorio remoto: git push origin mi-rama.
Abra un pull request en el repositorio original.
Esperamos que disfrutes trabajando en este proyecto. ¡Gracias por tu contribución!

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo LICENSE para obtener más información.


¡Espero que esto sea útil! Si tienes alguna otra pregunta, no dudes en preguntar.