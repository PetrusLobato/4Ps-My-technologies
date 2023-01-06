import * as yup from 'yup';

export const schema = yup.object().shape({

    password: yup.string().required("Senha obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail incorreto"),
  })