import { FieldValues, useForm } from "react-hook-form";

const ReactForms = () => {

  const {register,handleSubmit,formState:{errors}} = useForm()
  console.log(errors);

  const onHelpSubmit = (data:FieldValues) => {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mb-3 formContainer">
          <div className="row">
            <div className="col">
              <h1 className="title">Login</h1>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="" className="form-label1">
                  {/* Login */}
                </label>
                {/* Spread Operator make copy of person, set email to e.target.value*/}
                <input
                  {...register('name',{required: true, minLength: 3})}
                  id="name"
                  type="text"
                  className="form-control"
                />
                {errors.name?.type === 'required' && <p className="text-danger">The name field is required.</p>}
                {errors.name?.type === 'minLength' ? <p className="text-danger">The Name field must be at least 3 characters in length</p>: null}
              </div>
            </div>
            <div className="pb-2 row">
              <div className="col">
                <label htmlFor="" className="form-label">
                  {/* Password */}
                </label>
                <input
                  {...register('password',{required:true,minLength: 1})} 
                  id="current-password"
                  type="current-password"
                  className="form-control"
                />
                {errors.password?.type === 'required' ? <p className="text-danger">The password field is required.</p>: null}
              </div>
            </div>
            <div className="pb-2 row">
              <div className="col">
                <button className="my-3 btn btn-primary" type="submit">
                  Log in
                </button>
              </div>
            </div>
            <div className="text-center row">
              <div className="col">
                <p>Not a member? Join Now</p>
                <button className="mb-3 btn btn-success" type="submit">
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ReactForms;
