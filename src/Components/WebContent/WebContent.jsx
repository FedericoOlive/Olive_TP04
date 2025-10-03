// Imports
import './WebContent.css'
import React from "react";
import Card from './Card/Card.jsx'

// Exports
export default WebContent

const profiles = [
    {
        name: "Ana Gómez",
        profession: "Diseñadora Gráfica",
        imgUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        description: "Apasionada por el diseño visual y la creación de marcas memorables."
    },
    {
        name: "Carlos Pérez",
        profession: "Desarrollador Web",
        imgUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        description: "Especializado en React y Node.js, creando experiencias web interactivas."
    },
    {
        name: "Lucía Fernández",
        profession: "Fotógrafa",
        imgUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        description: "Capturo momentos únicos a través de mi lente."
    },
    {
        name: "Diego Ramírez",
        profession: "Chef Profesional",
        imgUrl: "https://randomuser.me/api/portraits/men/4.jpg",
        description: "Cocinero creativo, amante de la cocina fusión y la gastronomía internacional."
    },
    {
        name: "Mariana López",
        profession: "Arquitecta",
        imgUrl: "https://randomuser.me/api/portraits/women/5.jpg",
        description: "Diseño espacios funcionales y estéticamente agradables."
    },
    {
        name: "Javier Torres",
        profession: "Ingeniero de Software",
        imgUrl: "https://randomuser.me/api/portraits/men/6.jpg",
        description: "Apasionado por la inteligencia artificial y soluciones escalables."
    },
    {
        name: "Valentina Ruiz",
        profession: "Escritora",
        imgUrl: "https://randomuser.me/api/portraits/women/7.jpg",
        description: "Creo historias que conectan y emocionan a los lectores."
    },
    {
        name: "Miguel Sánchez",
        profession: "Músico",
        imgUrl: "https://randomuser.me/api/portraits/men/0.jpg",
        description: "Compositor y guitarrista, explorando sonidos únicos."
    },
    {
        name: "Sofía Castillo",
        profession: "Ilustradora",
        imgUrl: "https://randomuser.me/api/portraits/women/9.jpg",
        description: "Dibujo mundos imaginarios y personajes llenos de vida."
    },
    {
        name: "Andrés Morales",
        profession: "Consultor de Marketing",
        imgUrl: "https://randomuser.me/api/portraits/men/10.jpg",
        description: "Ayudo a marcas a crecer y conectar con su audiencia."
    }
];

function WebContent()
{
    return (
        <div className = "WebContent">
            {
                profiles.map((profile, index) => (
                    <Card
                        key = {index}
                        name = {profile.name}
                        profession = {profile.profession}
                        imgUrl = {profile.imgUrl}
                        description = {profile.description}
                    />
                ))
            }
        </div>
    )
}