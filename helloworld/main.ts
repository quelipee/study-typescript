import {EmailValidator, ZipCodeValidator} from "./validators";

let email = 'felipe@gmail.com';
let validator = new EmailValidator();
let result = validator.isValid(email);

let validator2 = new ZipCodeValidator();
let result2 = validator2.isValid('12345');
console.log(result2);
