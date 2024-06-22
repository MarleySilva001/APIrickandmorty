import React, { useState } from 'react';

export default function Busca({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    
    <form onSubmit={handleSubmit} className='form'>
      <div className='barraDePesquisa'>
      <input
        type="text"
        placeholder=" Digite o Nome do Personagem..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='inputBusca'
      />
      <button type="submit"  className='botaoBusca'>Pesquisar</button>
      </div>
    </form>
    
  );
}
