import React, { useState, useEffect } from 'react';

import './App.css';
import backgroundImage from './assets/monte.jpg';

import api from './services/api';

import Header from './components/Header';

function App() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    api.get('techs').then((res) => {
      setTechs(res.data);
    });
  }, []);

  function handleAddTech() {
    setTechs([...techs, `Nova tecnologia ${Date.now()}`]);
  }

  return (
    <Header title="Rocketseat ReactJS">
      <img src={backgroundImage} width="300" />
      <ul>
        {techs.map((tech) => (
          <li key={tech.id}>{tech.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddTech}>
        Adicionar tecnologia
      </button>
    </Header>
  );
}

export default App;
