import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Projetos from"../Projetos/Projetos"
import Contatos from "../Contatos/Contatos"
import Inicio from "../Inicio/Inicio"

import styles from "./NavBar.module.scss"

//BrowserRouter: Container que vai envolver tudo relacionado as nossas rotas
//Routes: Uma caixa que vai envolver todas as rotas 
//Route <Route /> Define cada rota individualmente. 
//Link é usado para criar links entre as páginas, substituindo a tag <a>.

export default function NavBar() {
  return (
    <BrowserRouter>
    <nav className={styles.navBarHeader}>
      <img src="https://play-lh.googleusercontent.com/E6RS-I1T58nvom_QfR7gondwJ1OWqfv2c8lz09FviTc9XWjrNMCl4XiAZD0-6qb0Tw=w256" alt="Logo" />
      <ul>
        <li> <Link to="/"> Início   </Link> </li>
        <li> <Link to="/projetos"> Projetos </Link> </li>
        <li> <Link to="/contatos"> Contatos </Link> </li>
      </ul>
    </nav>

    <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
        <Route path="/contatos" element={<Contatos/>}/>
    </Routes>
    </BrowserRouter>
  )
}
