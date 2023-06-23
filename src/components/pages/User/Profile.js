import React from 'react'

import api from '../../../utils/api'

import { useState, useEffect } from 'react'

import useFlashMessage from '../../../hooks/useFlashMessage'

import styles from './Profile.module.css'
import formStyles from '../../form/Form.module.css'

import Input from '../../form/Input'
import RoundedImage from '../../layout/RoundedImage'

const Profile = () => {

  const[user, setUser] = useState({})
  const[preview, setPreview] = useState()
  const [token] = useState(localStorage.getItem('token') || ' ')
  const {setFlashMessage} = useFlashMessage()

  useEffect(() => {
    api.get('/users/checkuser', {
      headers:{
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then((response) => {
      setUser(response.data)
    })
  }, [token])

  function onFileChange(e){
    setPreview(e.target.files[0])
    setUser({...user, [e.target.name]: e.target.files[0]})

  }

  function handleChange(e){
    setUser({...user, [e.target.name]: e.target.value})

  }

  async function handleSubmit(e){
    e.preventDefault()

    let msgType = 'success'

    const formData = new FormData()

    await Object.keys(user).forEach((key) => 
      formData.append(key, user[key])
    )

    const data = await api.patch(`/users/edit/${user._id}`, formData, {
      headers:{
        Authorization: `Bearer ${JSON.parse(token)}`,
        'Content-Type' : 'multipart/form-data'
      }
    }).then((response) => {
      return response.data
    }).catch((err) => {
      msgType = 'error'
      return err.response.data
    })

    setFlashMessage(data.message, msgType)

  }

  return (
    <section>
<<<<<<< HEAD
      <div className={styles.profile_container}>
        <h1>Perfil</h1>
        {(user.image || preview) && (
          <RoundedImage src={preview ? URL.createObjectURL(preview) : `${process.env.REACT_APP_API}/images/users/${user.image}`}
          alt={user.name}
          />
        )}
      </div>
      
      <form onSubmit={handleSubmit} className={formStyles.form_container}>
=======
      <h1>Perfil</h1>
      <h2>Teste</h2>
      <p>Preview Image</p>
      <form className={formStyles.form_container}>
>>>>>>> d8ddc6f4b7aaca6458bdc0c8d7dfb1db2309296e
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