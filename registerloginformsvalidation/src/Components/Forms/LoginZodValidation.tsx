import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";

const schema = z
  .object({
  email: z
    .string()
    .email()
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message:
      "Password must include at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
});

type FormData = z.infer<typeof schema>;

const LoginZodValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <h1 className="text-center title">Login Form validation with Zod</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 formContainer">
          <div className="pt-2 row">
            <div className="col">
              <h1 className="title">Login</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="login" className="form-label">
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
                      <LiaEyeSlashSolid size={20} />
                    ) : (
                      <LiaEyeSolid size={20} />
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
            <a className="password">
                Forgot Password?
                </a>
              <p className="pt-4 member">Not a member? Join Now</p>
              <button className="mb-3 btn btn-success" type="submit">
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
