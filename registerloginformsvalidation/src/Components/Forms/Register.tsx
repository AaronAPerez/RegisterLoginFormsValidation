import { FormEvent, useState } from "react";

const Register = () => {
  //need a useState to handle our form. UseState needs to handle an object. person object that will have first name, last name, email, password, confirm password
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
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
              <h1 className="title">Sign Up</h1>
              <p>It's quick and easy.</p>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="" className="form-label">
                  {/* First Name */}
                </label>
                {/* Spread Operator make copy of person, set firstName to e.target.value*/}
                <input
                  onChange={(e) =>
                    setPerson({ ...person, firstName: e.target.value })
                  }
                  id="firstName"
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="col">
                <label htmlFor="" className="form-label">
                  {/* Last Name */}
                </label>
                <input
                  onChange={(e) =>
                    setPerson({ ...person, lastName: e.target.value })
                  }
                  id="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="py-1 row">
              <div className="col">
                <label htmlFor="" className="form-label">
                  {/* Email */}
                </label>
                <input
                  onChange={(e) =>
                    setPerson({ ...person, email: e.target.value })
                  }
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="py-1 row">
              <div className="col">
                <label htmlFor="" className="form-label">
                  {/* Password */}
                </label>

                <input
                  onChange={(e) =>
                    setPerson({ ...person, email: e.target.value })
                  }
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="py-1 row">
              <div className="col">
                <label htmlFor="" className="form-label">
                  {/* Confirm Password */}
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="pt-2 row">
              <div className="col">
                <button className="my-3 btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;


