export const ERROR_MESSAGE_CONSTANT = {
  // 0 - 50 (App errors)
  undefine: {
    code: 0,
    message: "Oops there is an error.",
  },
  // 51 - 100 (User errors)
  emailInvalid: {
    code: 51,
    message: "Field email is required. Must be an email.",
  },
  fullNameInvalid: {
    code: 52,
    message: "Field fullName is required. Must be of length 3 to 40 and no special characters.",
  },
} as const;
