import * as yup from 'yup';

export const schema = yup.object().shape({

    title: yup.string().required("Tecnologia obrigatória"),
    status: yup.string(),
  })