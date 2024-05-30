import { zodResolver } from "@hookform/resolvers/zod"; // zodResolver from @hookform/resolvers/zod for integrating Zod with react-hook-form
import { useState } from "react"; // useState hook from React for state management
import { FieldValues, useForm } from "react-hook-form"; // useForm hook and FieldValues type from react-hook-form for form handling
import { z } from "zod"; // Zod library for schema validation

import { LiaEyeSlashSolid } from "react-icons/lia"; // Icon componentS for showing/hiding the password
import { LiaEyeSolid } from "react-icons/lia"; // 

// Zod schema for validating the form fields
const schema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "Required: must be at least 2 characters" }),
    lastName: z
      .string()
      .min(2, { message: "Required: must be at least 2 characters" }),
    email: z.string().email().trim().toLowerCase(), // Validate email format 
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
        message:
          "Password must include at least one uppercase letter, one lowercase letter, one number and one special character",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Required: Passwords must match",
    path: ["confirmPassword"], // Specify the path to the confirmPassword field for error handling
  });

// Infer the type form data from the Zod schema
type FormData = z.infer<typeof schema>;

const RegisterZodValidation = () => {
  // Use the useForm hook from react-hook-form and pass the Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(errors); // Log the errors

  // Define the onSubmit function to handle form submission
  const onSubmit = (data: FieldValues) => {
    console.log(data); // Log the form data
  };

  // Use the useState hook to manage the visibility of the password field
  const [passwordVisible, setPasswordVisible] = useState(false);


    return (
     <>{/* Render the form */}
       <h1 className="text-center title"></h1>
       <form onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-3 formContainer">
           <div className="pt-2 row">
             <div className="col">
               <h1 className="title">Sign Up</h1>
             </div>
           </div>
           <div className="row">
             <div className="col">
               <label htmlFor="firstName" className="form-label">
                 {/* First Name */}
              </label>
               <input
                {...register("firstName")}
                id="firstName"
                type="text"
                className="form-control"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="pt-1 text-danger">{errors.firstName.message}</p>
              )}
            </div>
            <div className="col">
              <label htmlFor="" className="form-label is-invalid">
                {/* Last Name */}
              </label>
              <input
                {...register("lastName")}
                id="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="pt-1 text-danger">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="" className="form-label">
                {/* Login */}
              </label>
              <input
                {...register("email")}
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
                      <LiaEyeSolid size={22} color="green"/>
                    )}
                  </span>
                </div>
              </div>
              {errors.password && (
                <p className="pt-1 text-danger">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="pb-2 row">
            <div className="col">
              <label htmlFor="" className="form-label">
                {/* Password */}
              </label>
              <div className="showHidePassword"></div>
              <input
                {...register("confirmPassword")}
                id="confirmPassword"
                type={passwordVisible ? "text" : "password"}
                className="form-control"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="pt-1 text-danger">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
          <div className="pt-4 row">
            <div className="col">
              <p className="termsText">
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                // disabled={!isValid}
                className="mb-3 btn btn-success"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterZodValidation;
