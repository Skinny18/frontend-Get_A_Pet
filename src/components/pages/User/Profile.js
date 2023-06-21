import React from 'react'

import { useState, useEffect } from 'react'

import styles from './Profile.module.css'
import formStyles from '../../form/Form.module.css'

import Input from '../../form/Input'

const Profile = () => {

  const[user, setUser] = useState({})

  function onFileChange(e){

  }

  function handleChange(e){

  }
  return (
    <section>
      <h1>Perfil</h1>
      <h2>Teste</h2>
      <p>Preview Image</p>
      <form className={formStyles.form_container}>
        <Input
          text="Imagem"
          type="file"
          name="image"
          handleOnChange={onFileChange}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite seu E-mail"
          handleOnChange={handleChange}
          value={user.email || " "}
        />
        <Input
          text="Nome"
          type="text"
          name="nome"
          placeholder="Digite seu Nome"
          handleOnChange={handleChange}
          value={user.name || " "}
        />
        <Input
          text="Fone"
          type="text"
          name="phone"
          placeholder="Digite seu Telefone"
          handleOnChange={handleChange}
          value={user.phone || " "}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua Senha"
          handleOnChange={handleChange}
        />
        <Input
          text="Confirmação de Senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme a sua Senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Editar" />
      </form>
    </section>
    )
}

export default Profile