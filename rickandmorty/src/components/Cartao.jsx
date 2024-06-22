import React from 'react';

export default function Cartao({ character }) {
  return (
    <div className="quadrado">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <div className='info'>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Espécie:</strong> {character.species}</p>
      </div>
    </div>
  );
}