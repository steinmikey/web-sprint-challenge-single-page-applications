import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().trim().required("name is required").min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["small", "medium", "large"], "must choose size"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  blackOlives: yup.boolean(),
  extraCheese: yup.boolean(),
  specialInstructions: yup.string().trim(),
});

export default formSchema;
