import { createContext, useEffect, useState } from "react";
import { instance } from "../service/api";
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";


export const AuthContext = createContext({});




export const AuthProvider = ({children}) => {


    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(true);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('@kenzie-hub:token') || null);
    const navigate = useNavigate();
    const location = useLocation();


    async function onSubmitForm(data){

      
        try {
    
          setLoading(true);
    
         const response = await instance.post('/users', data);
          
          toast.success('Cadastro Realizado com sucesso')
         
          navigate('/');
    
        } catch (error) {
          toast.error(error.response.data.message);
    
        } finally{
          
          setLoading(false);
          
          reset();
        }
    
       
      } 
    
  


    useEffect(() => {

        async function loadUser(){

            if(token){
                try {

                    instance.defaults.headers.authorization = `Bearer ${token}`;

                    const {data} = await instance.get('/profile');

                    setUser(data);

                } catch (error) {
                        console.error(error)
                } finally {
                        setRefreshing(false);
                }

            }

        }

        loadUser();

    },[])


    async function onSubmitLogin(data) {
          
        try {

        setLoading(true);

        const response = await instance.post('/sessions', data); 

        window.localStorage.clear();

        const { token, user: userResponse } = response.data;

        localStorage.setItem('@kenzie-hub:token', token);

        instance.defaults.headers.authorization = `Bearer ${token}`;

        setUser(userResponse);

        const toNavigate = location.state?.from.pathname || 'dashboard'

        toast.success('Logado com sucesso');

        navigate(toNavigate, {replace: true}) 
         // replace - seta de voltar, limpa a pagina anterios, não volta para o login 
  
        } catch (error) {
         
          toast.error(error.response.data.message);

        } finally{
          setLoading(false);
        }
 
  }

    return(

        <AuthContext.Provider value={{onSubmitLogin, onSubmitForm, user, loading, refreshing, token}}>
            {children}
        </AuthContext.Provider>

    )
}