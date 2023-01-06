import React, { useContext } from 'react';
import {Form, H1, LinkStyle as Link} from './style';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validations/RegisterLogin';
import { AuthContext } from '../../contexts/AuthContext';





const Home = () => {

  
  const {onSubmitLogin, loading} = useContext(AuthContext);
 
  const { register, handleSubmit, formState:{errors} } = useForm(
    {
     resolver: yupResolver(schema),
    });



  return (
   <>
    <H1>4Ps My technologies</H1>
    <Form onSubmit={handleSubmit(onSubmitLogin)}>

      <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <input id='email' type="text" {...register('email')}/>
      
      <p className='erro'>{errors.email?.message}</p>

      <label htmlFor="senha">Senha</label>
      <input id='senha' type="password" {...register('password')}/>
      
      <p className='erro'>{errors.password?.message}</p>

      <button type='submit' disabled={loading}>
        <span>{loading ? 'Entrando...' : 'Entrar'}</span>
      </button>

      <p>Ainda não possui uma conta?</p>

      <Link to = 'register'>
        <span>Cadastre-se</span>
      </Link>

    </Form>
   
   
   </>
  )
}

export default Home