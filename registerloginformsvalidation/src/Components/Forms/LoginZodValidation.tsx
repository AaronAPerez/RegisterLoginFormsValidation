import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";


const schema = z.object({
    email: z
      .string()
      .email()
      .min(3, { message: "Email must be at least 3 characters." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
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