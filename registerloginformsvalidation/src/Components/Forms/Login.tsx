import { FormEvent, useState } from "react";
// import { HiOutlineMail } from "react-icons/hi";
// import { RiLockLine } from "react-icons/ri";

const Login = () => {
  //need a useState to handle our form. UseState needs to handle an object. person object that will have first name, last name, email, password, confirm password
  const [person, setPerson] = useState({
    email: "",
    password: "",
  });

  //create a helper function to handle our on submit from our form,
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <>
      <form>
        <div className="mb-3 formContainer">
          <div className="row">
            <div className="col">
              <h1 className="title">Login</h1>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="" className="form-label1">
                  {/* <HiOutlineMail size={30} /> */}
                  {/* Email */}
                </label>
                {/* Spread Operator make copy of person, set email to e.target.value*/}
                <input
                  onChange={(e) =>
                    setPerson({ ...person, email: e.target.value })
                  }
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="pb-2 row">
              <div className="col">
                <label htmlFor="" className="form-label">
                  {/* Password */}
                  {/* <RiLockLine size={30}/> */}
                </label>
                <input
                  onChange={(e) =>
                    setPerson({ ...person, password: e.target.value })
                  }
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
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
  );
};

export default Login;
