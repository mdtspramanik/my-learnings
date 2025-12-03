// Enums are used to define a set of named constants that can be used to represent a group of related values.

// Enums example
enum LoginError {
  INVALID_EMAIL = "invalid email",
  INVALID_PASSWORD = "invalid password",
  INVALID_CREDENTIALS = "invalid credentials",
  INTERNAL_ERROR = "internal error",
}

const printError = (error: LoginError) => {
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
