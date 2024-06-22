import React from "react"

export default function Imagem({ src }) {

    return (
        <div className="titulo">
        <img src={src} alt="imagem" />
        </div>
    )
}