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
    "stock": 12,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-1.mp4",
    "category": "Frontend",
    "vistas": 456,
    "price":345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 2,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 7,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-2.mp4",
    "category": "Frontend",
    "vistas": 456,
    "price":445,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 3,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 9,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-3.mp4",
    "category": "Backend",
    "vistas": 456,
    "price":1145,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 4,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 6,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-4.mp4",
    "category": "Frontend",
    "vistas": 456,
    "price":3345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 5,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 5,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-5.mp4",
    "category": "Backend",
    "vistas": 456,
    "price":3455,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 6,
    "nombre": "Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie",
    "descripcion": "Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.",
    "stock": 26,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-6.mp4",
    "category": "Camioneros",
    "vistas": 456,
    "vendidos": 154,
    "price": 75.00,
    "type": "Regular",
    "color": "Brown",
    "material": "Cotton, Jeans",
    "brand": "Reebook",
    "size":["Small","Medium","Large","Extra Large","Overside"],
    "specification":"With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "propertys":["Some great feature name here","Lorem ipsum dolor sit amet, consectetur","Duis aute irure dolor in reprehenderit","Optical heart sensor"],
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 7,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-7.mp4",
    "category": "Camioneros",
    "vistas": 456,
    "price":6345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 8,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 5,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-8.mp4",
    "category": "Camioneros",
    "vistas": 456,
    "price":8345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 9,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 9,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-9.mp4",
    "category": "Camioneros",
    "vistas": 456,
    "price":9345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 10,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 25,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-10.mp4",
    "category": "Camioneros",
    "vistas": 456,
    "price":7345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 11,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 12,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-11.mp4",
    "category": "Servicios",
    "vistas": 456,
    "price":5345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 12,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-12.mp4",
    "category": "Servicios",
    "vistas": 456,
    "price": 7345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 13,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 14,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-13.mp4",
    "category": "Fullstack",
    "vistas": 456,
    "price": 8345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 14,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 15,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-14.mp4",
    "category": "Fullstack",
    "vistas": 456,
    "price": 9345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 15,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 21,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-15.mp4",
    "category": "Fullstack",
    "vistas": 456,
    "price": 7345,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 16,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 8,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-16.mp4",
    "category": "Frontend",
    "vistas": 456,
    "price": 9035,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 17,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 7,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-17.mp4",
    "category": "Frontend",
    "vistas": 456,
    "price": 675,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 18,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-18.mp4",
    "category": "Frontend",
    "vistas": 456,
    "price": 6645,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 19,
    "nombre": "name1",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 29,
    "categoria": "Categoria 1",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-19.mp4",
    "category": "Backend",
    "vistas": 456,
    "price": 8745,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 20,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 25,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-20.mp4",
    "category": "Backend",
    "vistas": 456,
    "price": 5433,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 21,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 7,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-21.mp4",
    "category": "Backend",
    "vistas": 456,
    "price": 4544,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 22,
    "nombre": "Top 5-s Programming Language",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 8,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-22.mp4",
    "category": "Backend", 
    "vistas": 456,
    "price": 7845,
    "timestamp": "03/12/2023 20:21" 
  },
  {
    "id": 23,
    "nombre": "name2",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 2,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-23.mp4",
    "category": "Backend",
    "vistas": 456,
    "price": 8945,
    "timestamp": "03/12/2023 20:21"
  },
  {
    "id": 24,
    "nombre": "Top 5-s Programming Language",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 23,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-24.mp4",
    "category": "Backend",
    "vistas": 456,
    "price": 6745,
    "timestamp": "03/12/2023 20:21" 
  },
  {
    "id": 25,
    "nombre": "Top 5-s Programming Language",
    "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
    "stock": 11,
    "categoria": "Categoria 2",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
    "video": "../src/assets/video/videoproducto-cafe-25.mp4",
    "category": "Manager",
    "vistas": 456,
    "price": 9645,
    "timestamp": "03/12/2023 20:21" 
  }
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(products);
    },1000);
})



export default getProducts