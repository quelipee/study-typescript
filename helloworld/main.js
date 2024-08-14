"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
let email = 'felipe@gmail.com';
let validator = new validators_1.EmailValidator();
let result = validator.isValid(email);
let validator2 = new validators_1.ZipCodeValidator();
let result2 = validator2.isValid('12345');
console.log(result2);
