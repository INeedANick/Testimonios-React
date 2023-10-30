import './App.css';
import Testimonio from "./componentes/testimonio"
import "../src/hojas-de-estilos/Testimonio.css"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
