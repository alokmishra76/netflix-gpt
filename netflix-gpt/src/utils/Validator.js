export const Validator = (email, password) => {
  const isEmailValid = `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`.match(email);
  const isPasswordValid = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$".match(password);
  
  if(!isEmailValid && isPasswordValid) return "Email is not valid";
  if(!isPasswordValid && isEmailValid) return "Password is not valid";
  if(!isEmailValid && !isPasswordValid) return "Email and Password Invalid";
  if(isEmailValid && isPasswordValid) return null;
}