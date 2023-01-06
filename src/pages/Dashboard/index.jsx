import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import TechnogiesList from '../../components/TechnologiesList';
import { AuthContext } from '../../contexts/AuthContext';
import { ListProvider } from '../../contexts/ListContext';
import {Figure, Span, Div, Container } from './style'
import logo from '../../assets/img/Logo.svg'
// import { useParams } from 'react-router-dom'

const Dashboard = () => {
//  const {name} = useParams() 
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  
  
 

  function logout(){

    window.localStorage.clear();

    navigate('/')

  }

  function openModal(){
    navigate('addTechnologie')
  }

  

  return (
    
      <div>
        
        <Div>
          <section>
            <Figure>
            <img src={logo} alt="logo" /> 
            </Figure>
            <Span>
              <button onClick={() => logout()}>Sair</button>
            </Span>
          </section>
        </Div>

        <Div>
          <section>
              <h5>Bem-Vindo, {user.name}</h5>
              <p>Projeto em React (Introdução ao Front-end)</p>
          </section>
        </Div>

        <ListProvider>
          <Container>

            <div>
              <h3>Tecnologias</h3>
              <span onClick={() => openModal()}>+</span>
            </div>

            
            <TechnogiesList/>
            
          </Container>

        <Outlet/>
        </ListProvider>
        
      </div>
  )
}

export default Dashboard