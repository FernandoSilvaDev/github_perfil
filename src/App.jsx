import { useState } from "react";
import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import './App.css';
// 1° Exemplo
function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario ] = useState ('');
  return(
    <div>
      <div className="nomeUsuario">
        <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Escreva o nome de usuario Github" />
      </div>
      {nomeUsuario.length > 4&& (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      {/* Botão de montar e desmontar o formulario */}
      {/* {formularioEstaVisivel && ( <Formulario/> )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggleform</button> */}
    </div>
  )
}

export default App
