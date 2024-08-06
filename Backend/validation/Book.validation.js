import joi from "joi";
const createBooksScheme = joi.object({
  title: joi.string().required(),
  price: joi.number().required(),
  name: joi.string().required(),
  category: joi.string().required(),
  image: joi.string().uri().required(),
});

export default createBooksScheme;
