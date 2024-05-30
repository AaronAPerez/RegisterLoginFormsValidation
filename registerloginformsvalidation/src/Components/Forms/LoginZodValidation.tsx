import { zodResolver } from "@hookform/resolvers/zod"; // zodResolver from @hookform/resolvers/zod for integrating Zod with react-hook-form
import { useState } from "react"; // useState hook from React for state management
import { FieldValues, useForm } from "react-hook-form"; // useForm hook and FieldValues type from react-hook-form for form handling
import { z } from "zod"; // Zod library for schema validation

import { LiaEyeSlashSolid } from "react-icons/lia"; // Icon componentS for showing/hiding the password
import { LiaEyeSolid } from "react-icons/lia"; // 

// Define a Zod schema for form validation
const schema = z.object({
  email: z
    .string()
    .email() // Ensure the input is a valid email
    .trim() // Remove leading and trailing whitespace
    .toLowerCase(), // Convert email to lowercase
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }) // Minimum password length
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message:
        "Password must include at least one uppercase letter, one lowercase letter, one number and one special character",
    }), // Password requirements
});

// Infer the type of the form data from the Zod schema
type FormData = z.infer<typeof schema>;

const LoginZodValidation = () => {
  // Use the useForm hook from react-hook-form with the Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Log the form errors
  console.log(errors);

  // Handle form submission
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  // State to control password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // rendering the login form
  return (
    <>
      <h1 className="text-center title"></h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 formContainer">
          <div className="pt-2 row">
            <div className="col">
              <h1 className="title">Login</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="email" className="form-label">
                {/* Login */}
              </label>

              <input
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
                id="email"
                type="email"
                autoComplete="email"
                className="form-control"
                placeholder="Email"
              />
              {errors.email && (
                <p className="pt-1 text-danger">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="pb-2 row">
            <div className="col">
              <label htmlFor="password" className="form-label">
                {/* Password */}
              </label>

              <div className="inputWrapper">
                <input
                  {...register("password")}
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  autoComplete="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="showHidePassword">
                  <span
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    style={{ display: "inline-block" }}
                  >
                    {passwordVisible ? (
                      <LiaEyeSlashSolid size={22} />
                    ) : (
                      <LiaEyeSolid size={22} color="green" />
                    )}
                  </span>
                </div>
              </div>
              {errors.password && (
                <p className="pt-1 text-danger">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="pt-2 row">
            <div className="col">
              <button
                //   disabled={!isValid}
                className="my-3 btn btn-primary"
                type="submit"
              >
                Log in
              </button>
            </div>
          </div>
          <div className="text-center row">
            <div className="col">
              <a className="password">Forgot Password?</a>
              <p className="pt-4 fw-light">Not a member? Join Now</p>
              <button className="mb-3 btn btn-success">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginZodValidation;
