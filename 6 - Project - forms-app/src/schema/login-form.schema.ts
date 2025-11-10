import * as yup from "yup";

export const loginFormSchema = yup.object({
  name: yup.string().required("Please provide the name"),
  email: yup
    .string()
    .email("Invalid email provided")
    .required("Please provide email address"),
});
