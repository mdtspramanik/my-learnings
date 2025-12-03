"use strict";
// Enums are used to define a set of named constants that can be used to represent a group of related values.
Object.defineProperty(exports, "__esModule", { value: true });
// Enums example
var LoginError;
(function (LoginError) {
    LoginError["INVALID_EMAIL"] = "invalid email";
    LoginError["INVALID_PASSWORD"] = "invalid password";
    LoginError["INVALID_CREDENTIALS"] = "invalid credentials";
    LoginError["INTERNAL_ERROR"] = "internal error";
})(LoginError || (LoginError = {}));
const printError = (error) => {
    switch (error) {
        case LoginError.INVALID_EMAIL:
            console.log("Invalid email");
            break;
        case LoginError.INVALID_PASSWORD:
            console.log("Invalid password");
            break;
        case LoginError.INVALID_CREDENTIALS:
            console.log("Invalid credentials");
            break;
        case LoginError.INTERNAL_ERROR:
            console.log("Internal error");
            break;
    }
};
printError(LoginError.INVALID_EMAIL);
printError(LoginError.INVALID_PASSWORD);
printError(LoginError.INVALID_CREDENTIALS);
printError(LoginError.INTERNAL_ERROR);
//# sourceMappingURL=enums.js.map