import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";



const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters."}),
  lastName: z
    .string()
    .min(2, { message: "Last Name must be at least 2 characters."}),
  email: z
    .string()
    .email()
    .toLowerCase()
    .trim(),
  password: z
  .string()
  // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
  .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
{ message: "Password must be Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character" }),
  confirmPassword: z
  .string()
  .min(8, { message: "Password must be at least 8 characters."}),
    })
    .refine((data) => data.password === data.confirmPassword, 
    {message: "Password fields do not match",
    path: ["confirmPassword"]}
  );


type FormData = z.infer<typeof schema>;



const RegisterZodValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(errors);

  const onHelpSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center title">Register Form Validation with Zod</h1>
      <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mb-3 formContainer">
          <div className="row">
            <div className="col">
              <h1 className="title">Sign Up</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="" className="form-label">
                {/* First Name */}
              </label>
              {/* Spread Operator make copy of person, set email to e.target.value*/}
              <input
                {...register("firstName")}
                id="firstName"
                type="text"
                autoComplete="text"
                className="form-control"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-danger">{errors.firstName.message}</p>
              )}
            </div>
            <div className="col">
              <label htmlFor="" className="form-label">
                {/* Last Name */}
              </label>
              <input
                {...register("lastName")}
                id="lastName"
                type="text"
                autoComplete="text"
                className="form-control"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-danger">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="" className="form-label">
                {/* Login */}
              </label>
              {/* Spread Operator make copy of person, set email to e.target.value*/}
              <input
                {...register("email")}
                id="email"
                type="email"
                autoComplete="email"
                className="form-control"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="pb-2 row">
            <div className="col">
              <label htmlFor="" className="form-label">
                {/* Password */}
              </label>
              <input
                {...register("password")}
                id="password"
                type="password"
                autoComplete="password"
                className="form-control"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="pb-2 row">
            <div className="col">
              <label htmlFor="" className="form-label">
                {/* Password */}
              </label>
              <input
                {...register("confirmPassword")}
                id="confirmPassword"
                type="password"
                autoComplete="password"
                className="form-control"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-danger">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div className="py-3 row">
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
  )
}

export default RegisterZodValidation
