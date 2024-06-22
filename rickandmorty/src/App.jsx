import React, { useState } from 'react';
import './App.css'
import Busca from './components/Busca';
import Personagem from './components/Lista';
import Imagem from './components/Imagem';

function App() {
  const [characters, setCharacters] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchCharacters = (name) => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results || []);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className='tudo'>
      <header className='cabecalho'>
        <Imagem src="Rick-and-Morty.png" />
        <h1>Character Search</h1>
        </header>
        <Busca onSearch={fetchCharacters} />
      <div>
        {Loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Personagem characters={characters} />
        )}
      </div>
    </div>
  );
}

export default App;