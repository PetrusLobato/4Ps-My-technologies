import * as yup from 'yup';

export const schema = yup.object().shape({

    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail incorreto"),
    password: yup.string().min(8, 'No minimo 8 caracteres').required("Senha obrigatório"),
    confirmPassword: yup.string().required("Confirmação obrigatório").oneOf([yup.ref('password')], 'Confirmação diferente da senha'),
    bio: yup.string().required("Biografia obrigatório"),
    contact: yup.string().min(11, 'No minimo 11 caracteres').required("Número obrigatório"),
    course_module: yup.string().required("Modulo obrigatório"),
  
  })