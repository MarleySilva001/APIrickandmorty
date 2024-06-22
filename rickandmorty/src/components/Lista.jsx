import React from 'react';
import Cartao from './Cartao';

export default function Personagem({ characters }) {


  return (
    <div className='lista'>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>
            <Cartao character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
}