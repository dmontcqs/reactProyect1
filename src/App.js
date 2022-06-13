import "./App.css";
import Testimonio from "./componentes/Testimonio";


function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Estos son algunos de los títulos disponibles</h1>
        
        <Testimonio 
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="drawing"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio= "Siempre he tenido probemas con JS"
          />
        <Testimonio 
        nombre="libro 2"
        pais="Suecia"
        imagen="digital-yen"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        testimonio= "Siempre he tenido probemas con JS"/>
        
        <Testimonio
        nombre="Libro 3"
        pais="Suecia"
        imagen="captura-libro"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        testimonio= "Siempre he tenido probemas con JS" />
      </div>
    </div>
  );
}

export default App;
