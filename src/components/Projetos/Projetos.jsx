import { useState } from "react"

import PetAdopt from "../../assets/pet.jpg"
import ReciclaTech from "../../assets/recicla.jpg"
import VerdeAcao from "../../assets/verde.jpg"
import Connect from "../../assets/desafio-Connect.png"

import styles from "./Projetos.module.scss"

export default function Projetos () {

    const[projetos, setProjetos] = useState( [
        {
            id: 1,
             imagem: PetAdopt,
              nome:"PetAdopt",
               descricao:"Projeto criado para adoção de pets"
              
         },

        {
            id: 2,
             imagem: ReciclaTech,
              nome:"ReciclaTech",
               descricao:"Projeto focado para facilitar doações de eletrõnico"
         },

        {
            id: 3,
             imagem: VerdeAcao,
              nome:"VerdeAcao",
               descricao:"Projeto criado para adoção de pets"
            },

             {
            id: 4,
             imagem: Connect,
              nome:"DesafioConnect",
               descricao:"Desafio final em Front"
              
         },

        {
            id: 5,
             imagem: ReciclaTech,
              nome:"ReciclaTech",
               descricao:"Projeto focado para facilitar doações de eletrõnico"
         },

        {
            id: 6,
             imagem: VerdeAcao,
              nome:"VerdeAcao",
               descricao:"Projeto criado para adoção de pets"
            }
    ] )

  return (
    
      <section className={styles.sectionProjetos}>
        {projetos.map((item) => (
          <article key={item.id} className={styles.cardProjetos}>
            <img src={item.imagem} alt="" />
            <h2> {item.nome} </h2>
            <p> {item.descricao} </p>
            
          </article>
        ))}
      </section>
  
  );
}

