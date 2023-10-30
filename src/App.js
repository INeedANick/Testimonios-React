import './App.css';
import Testimonio from "./componentes/testimonio"
import "../src/hojas-de-estilos/Testimonio.css"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
        nombre = "Xiangling"
        pais = "Liyue"
        imagen = "primero"
        cargo = "Software Engineer"
        empresa = "Spotify"
        testimonio = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
        <Testimonio 
        nombre = "2B"
        pais = "Nier"
        imagen = "segundo"
        cargo = "Software Engineer"
        empresa = "ChatDesk"
        testimonio = "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />
        <Testimonio 
        nombre = "Haru Nonaka"
        pais = "Japan"
        imagen = "tercero"
        cargo = "Software Engineer"
        empresa = "Amazon"
        testimonio = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
      </div>
    </div>
  );
}

export default App;
