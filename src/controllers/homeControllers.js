
const products = [
    {
        id:"1",
        titulo:"Feminismo Para Principiantes",
        autor: "Nuria Varela",
        imagen: "/assets/libros/1.jpeg",
    },
    {
        id:"2",
        titulo:"El Chico de las Estrellas",
        autor: "Chris Pueyo",
        imagen: "/assets/libros/2.jpeg",
    },
    {
        id:"3",
        titulo:"Ecologismo Real",
        autor: "J. M. Mulet",
        imagen:"/assets/libros/3.jpeg",
    },
    {
        id:"4",
        titulo:"Puta Madre",
        autor: "Dalia F. Walker",
        imagen: "/assets/libros/4.jpeg",
    },
    {
        id:"5",
        titulo:"Los hombres me explican cosas",
        autor: "Rebecca Solnit",
        imagen:"/assets/libros/5.jpeg",
    },
];


const sendHomeView = (req, res) => {
    return res.status(200).render("pages/home.ejs", {products});
  };
  
module.exports = { sendHomeView };