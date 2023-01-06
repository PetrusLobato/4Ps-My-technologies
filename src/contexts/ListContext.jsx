import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../service/api";
import { AuthContext } from "./AuthContext";


export const ListContext = createContext({});


export const ListProvider = ({children}) => {

    const navigate = useNavigate();

    const { user, token } = useContext(AuthContext);

    const [ list, setList ] = useState(user.techs);
    

    async function addTech(data){
      
        try {

        instance.defaults.headers.authorization = `Bearer ${token}`;

         const response = await instance.post('/users/techs', data);

        
         const responseUser = await instance.get(`/users/${response.data.user.id}`)
        
        
            toast.success('Tecnologia cadastrada com sucesso');
         
            setList(responseUser.data.techs);
            
            
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            navigate(-1)
        }
    }

    async function deleteItem(elemento){

           const newList = list.filter((item) => elemento.id !== item.id);

           setList(newList);

           await instance.delete(`/users/techs/${elemento.id}`)
    }

     
    return(

        <ListContext.Provider value={{addTech, deleteItem, list}}>

            {children}

        </ListContext.Provider>

    )


}