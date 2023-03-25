import * as Yup from 'yup';

// export const customerSchema = Yup.object().shape({
//   Email: Yup.string().email().required(),
//   Name: Yup.string().required(),
//   Surname: Yup.string().required(),
//   City: Yup.string().required(),
//   Birthday: Yup.date().max(new Date()).required()
// });

export const customerSchema = Yup.object().shape({
  Email: Yup.string().email().required(),
  Name: Yup.string().min(3).max(30).required(),
  Surname: Yup.string().min(3).max(30).required(),
  City: Yup.string().min(3).max(30).required(),
  Birthday: Yup.date().required().max(new Date()),
});