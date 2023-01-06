import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Figure, Form, Span, LinkStyle as Link } from './style'
import { schema } from '../../validations/RegisterUser';
import { AuthContext } from '../../contexts/AuthContext';
//import logo from '../../img/logo.svg'




const Register = () => {

  const {onSubmitForm, loading} = useContext(AuthContext);

  const { register, handleSubmit, formState:{errors}, reset } = useForm(
    {
     resolver: yupResolver(schema),
    });
  
  return (
   <>
    <Container>
      <Figure>
      {/* <img src={logo} referrerpolicy="no-referrer" alt="logo" /> */}
      </Figure>

      <Span>
        <Link to='/'>Voltar</Link>
      </Span>
      
      </Container>


    <Form>
           
      <form onSubmit={handleSubmit(onSubmitForm)}>

        <h3>Crie sua Conta</h3>
        <p>Rapido e grátis, vamos nessa</p>

        <label htmlFor="name">Nome</label>
        <input id='name' type="text" placeholder='Digite aqui seu nome' {...register('name')} />
        <p className='erro'>{errors.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input id='email' type="text" placeholder='Digite aqui seu email' {...register('email')} />
        <p className='erro'>{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <input id='password' type="password" placeholder='Digite aqui seu senha' {...register('password')} />
        <p className='erro'>{errors.password?.message}</p>

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input id='confirmPassword' type="password" placeholder='Digite aqui novament sua senha'  {...register('confirmPassword')}/>
        <p className='erro'>{errors.confirmPassword?.message}</p>

        <label htmlFor="bio">Bio</label>
        <input id='bio' type="text" placeholder='Fale sobre você' {...register('bio')}/>
        <p className='erro'>{errors.bio?.message}</p>

        <label htmlFor="contact">Contato</label>
        <input id='contact' type="text" placeholder='Opção de contato' {...register('contact')}/>
        <p className='erro'>{errors.contact?.message}</p>

        <label htmlFor="course_module">Selecionar módulo</label>
        <select id='course_module' defaultValue={'DEFAULT'}  {...register('course_module')}>
          <option value="DEFAULT" disabled>Módulos</option>
          <option  value="Segundo Módulo (Frontend avançado)">Segundo Módulo (Frontend avançado)</option>
          <option  value="Primeiro Módulo (Frontend avançado)">Primeiro Módulo (Frontend avançado)</option>
        </select>
        <p className='erro'>{errors.course_module?.message}</p>

        <button type='submit' disabled={loading}>{loading ? 'Cadastrando...' : 'Cadastrar'}</button>

      </form>

    </Form>
    
   </>
  )
}

export default Register