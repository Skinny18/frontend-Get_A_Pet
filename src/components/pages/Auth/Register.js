import React from 'react'

import Input from '../../form/Input'

import styles from '../../form/Form.module.css'
import { Link } from 'react-router-dom'

import {useState, useContext} from 'react'

//context
import { Context } from '../../../context/UserContext'

const Register = () => {

  const [user, setUser] = useState({})
  const {register} = useContext(Context)

  function handleChange(e){
    setUser({...user, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    //enviar o usuario para o banco
    register(user)
  }

  return (
    <section className={styles.form_container}>
        <h1>Registrar</h1>
        <form onSubmit={handleSubmit} >
          <Input text="Nome" type="text" name="name" placeholder="Digite seu nome" handleOnChange={handleChange}/>
          <Input text="Telephone" type="text" name="phone" placeholder="Digite seu Telefone" handleOnChange={handleChange}/>
          <Input text="E-mail" type="email" name="email" placeholder="Digite seu E-mail" handleOnChange={handleChange}/>
          <Input text="Senha" type="password" name="password" placeholder="Digite a sua senha" handleOnChange={handleChange}/>
          <Input text="Confirmação de Senha" type="password" name="confirmpassword" placeholder="Confirme sua senha" handleOnChange={handleChange}/>
          <input type="submit" value="Cadastrar" />
        </form>
        <p>
          Já tem conta? <Link to='/login' >Clique Aqui!</Link>
        </p>
    </section>
    )
}

export default Register