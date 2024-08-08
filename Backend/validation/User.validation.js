import joi from "joi";
const UserCreate = joi.object({
  userName: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});
export default UserCreate;
