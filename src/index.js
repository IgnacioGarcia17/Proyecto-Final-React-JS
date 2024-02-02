import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import OtroComponente from './components/OtroComponente';

const App = () => {
  return (
    <div>
      <NavBar />
      <OtroComponente />
      {/* Agrega más componentes o lógica según sea necesario */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
