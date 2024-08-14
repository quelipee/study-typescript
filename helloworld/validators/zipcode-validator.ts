import {Validator} from "./validator";

class ZipCodeValidator implements Validator {
    isValid(s: string): boolean {
        const zipCodeRegex = /[A-Za-z0-9]/g;
        return zipCodeRegex.test(s);
    }

}

export { ZipCodeValidator };