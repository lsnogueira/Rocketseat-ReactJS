import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [techs, setTechs] = useState(['React', 'React Native', 'Angular']);

  function handleAddTech() {
    setTechs([...techs, `Nova tecnologia ${Date.now()}`]);
  }

  return (
    <Header title="Rocketseat ReactJS">

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
