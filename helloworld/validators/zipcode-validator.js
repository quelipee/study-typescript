"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator = void 0;
class ZipCodeValidator {
    isValid(s) {
        const zipCodeRegex = /[A-Za-z0-9]/g;
        return zipCodeRegex.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
