/*export const getProducts = () => {
    return fetch("http://localhost/data/products/")
    .then((res) => res.json())
    .catch((error) => console.log(error))
}*/
/*
export const getProductsById = (id) => {
    return fetch(`http://localhost/data/products/${id}`)
    .then((res) => res.json())
    .catch((error) => console.log(error))
}*/


const products = 
[
  {
    "id": 1,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 2,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 3,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 4,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 5,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 6,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 7,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 8,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 9,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 10,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 11,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 12,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 13,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 14,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 15,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 16,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 17,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 18,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 19,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 20,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 21,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4",
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 22,
    "nombre": "Top 5-s Programming Language",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "src/assets/video/videoproducto-cafe.mp4", 
    "vistas": 456,
    "timestamp": "03/12/2023 20:21"
  }
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(products);
    },3000);
})



export default getProducts