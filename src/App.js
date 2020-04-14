import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/monte.jpg';

import Header from './components/Header';

function App() {
  const [techs, setTechs] = useState(['React', 'React Native', 'Angular']);

  function handleAddTech() {
    setTechs([...techs, `Nova tecnologia ${Date.now()}`]);
  }

  return (
    <Header title="Rocketseat ReactJS">
      <img src={backgroundImage} width="300" />
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddTech}>
        Adicionar tecnologia
      </button>

    </Header>
  );
}

export default App;
