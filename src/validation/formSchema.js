import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().trim().required("name is required").min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["small", "medium", "large"], "must choose size"),
  pepperoni: yup.boolean().oneOf([true, false]),
  sausage: yup.boolean().oneOf([true, false]),
  blackOlives: yup.boolean().oneOf([true, false]),
  extraCheese: yup.boolean().oneOf([true, false]),
  specialInstructions: yup.string().trim(),
});

export default formSchema;
