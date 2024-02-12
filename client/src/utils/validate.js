import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Enter your email...!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Enter password...!"),
});

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Enter your name...!"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Enter your email...!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Enter password...!"),
  confirmPassword: Yup.string()
    .required("Confirm your password...!")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
export const resetPasswordSchema = Yup.object({
  npassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Enter password...!"),
  cpassword: Yup.string()
    .required("Confirm your password...!")
    .oneOf([Yup.ref("npassword")], "Passwords not match"),
});
