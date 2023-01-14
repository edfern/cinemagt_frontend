## Empezar

Primero, ejecute el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

## Páginas 

CinemaGt cuenta con las siguientes páginas para su administración:

- En `/billboard` podemos encontrar la cartelera, donde se muestran las películas que están en:
    - En función
    - Pre-venta
    - Próximamente

- En `/movies` están todas las películas que tiene la aplicación, acá podemos hacer el mantenimiento de ellas.

- En `/functions` se lleva el control de la cartelera y sus diferentes estados que puede tener cada una de ellas.

    - `/coming-soon/[id]` se muestra las películas que tienen el estado **C**. 
    - `/[id]` se muestran las películas que tienen el estado **A** y **P**.
