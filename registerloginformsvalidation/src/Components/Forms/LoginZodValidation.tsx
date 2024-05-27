import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

// // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
// const passwordValidation = new RegExp(
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
//   );
  
//   const validationSchema = z.object({
//     email: z
//       .string()
//       .min(1, { message: 'Must have at least 1 character' })
//       .email({
//         message: 'Must be a valid email',
//       }),
//     password: z
//       .string()
//       .min(1, { message: 'Must have at least 1 character' })
//       .regex(passwordValidation, {
//         message: 'Your password is not valid',
//       }),
//   });


const schema = z.object({
    email: z
      .string()
      .toLowerCase()
      .email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    { message: "Required: Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character" })
  });
  
  type FormData = z.infer<typeof schema>;
  
  // interface FormData {
  //     name: string,
  //     password: string
  // }

const LoginZodValidation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm<FormData>({ resolver: zodResolver(schema) });
      console.log(errors);
    
      const onHelpSubmit = (data: FieldValues) => {
        console.log(data);
      };
    
      return (
        <>
          <h1 className="text-center title">Login Form validation with Zod</h1>
          <form onSubmit={handleSubmit(onHelpSubmit)}>
            <div className="mb-3 formContainer">
              <div className="row">
                <div className="col">
                  <h1 className="title">Login</h1>
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
                      type="text"
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
                    <button
                    //   disabled={!isValid}
                      className="my-3 btn btn-primary"
                      type="submit">
                      Log in
                    </button>
                  </div>
                </div>
                <div className="text-center row">
                  <div className="col">
                    <p>Not a member? Join Now</p>
                    <button 
                    className="mb-3 btn btn-success" 
                    type="submit">
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      );
    };
    

export default LoginZodValidation