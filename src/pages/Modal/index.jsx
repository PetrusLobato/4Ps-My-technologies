import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { ListContext } from '../../contexts/ListContext';
import { schema } from '../../validations/RegisterTech';
import { Container } from './style'

const Modal = () => {

  const {addTech} = useContext(ListContext)
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors}} = useForm(
    {
      resolver: yupResolver(schema)
    }
  )

  function logout(){
    navigate(-1)
  }


  return (
    <Container>
      <section>

        <div className='headerModal'>
            <p>Cadastrar Tecnologia</p>
            <span onClick={() => logout()}>X</span>
        </div>

        <form onSubmit={handleSubmit(addTech)}>
          <p>Nome</p>
          <input type="text" {...register('title')}/>
          <p className='erro'>{errors.title?.message}</p>

          <label htmlFor="status">Selecionar status</label>
          <select id="status" {...register('status')}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediario</option>
          <option value="Avançado">Avançado</option>
          </select>
          
          <button type='submit'>Cadastrar Tecnologia</button>
        </form>

      
      </section>
    </Container>
  )
}

export default Modal