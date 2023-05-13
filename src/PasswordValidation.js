export const  PasswordValidate=(text)=>{
 
  let re=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{8,}$/
  let small=/^(?=.*[a-z])/
  let upperCase=/^(?=.*[A-Z])/ 
  let digit=/(?=.*[0-9])/
  let length= /^.{6,20}$/
  let repeat=/(.)\1{2,}/i
  let smallValidation=small.test(text) ==false ?1:0
  let upperValidation= upperCase.test(text) ==false ? 1:0
  let digitValidation=digit.test(text) ==false ? 1:0
  let lengthValidation= length.test(text) ==false ? 1:0
  let repeatValidation=repeat.test(text) ==false ?0 :1
  return [smallValidation,upperValidation,digitValidation,lengthValidation,repeatValidation]
  
}