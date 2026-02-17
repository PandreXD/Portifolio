import React from 'react'

import Linkedin from "../../assets/linkedin.png"
import GitHub from "../../assets/logoGithub.png"
import Gmail from "../../assets/gmail.png"

import styles from "./contatos.module.scss"
export default function Contatos() {
  return (
    <section>
      <h2 className={styles.texto}>Minhas Redes</h2>
      <div className={styles.redesSociais}>
        <a href="https://www.linkedin.com/in/pedro-andr%C3%A9-5ba831188/" target="_blank"><img src={Linkedin}alt="Linkedin" /></a>

        <a href="https://github.com/PandreXD?tab=repositories" target="_blank"><img src={GitHub}alt="GitHub" /></a>

         <a href="mailto:wkpedroff@gmail.com?subject=Contato pelo Portfólio&body=Olá Pedro," target="_blank"><img src={Gmail}alt="Email" /></a>

         
      </div>

    </section>
  )
}
