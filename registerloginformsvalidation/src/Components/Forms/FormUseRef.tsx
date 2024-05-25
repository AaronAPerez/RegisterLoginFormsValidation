import { FormEvent, useRef } from "react";

const FormUseRef = () => {
  //Create a useRef
  const firstNameRef = useRef<HTMLInputElement>(null);

  const lastNameRef = useRef<HTMLInputElement>(null);

  const person = {
    firstName: "",
    lastName: "",
  };

  //create a helper function to handle our onSubmit
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted with our handleClick function");
    if(firstNameRef.current != null)
      person.firstName = firstNameRef.current.value;
    if(lastNameRef.current != null)
      person.lastName = parseInt(lastNameRef.current.value);
    console.log(person);
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <div className="mb-3 formContainer">
          <div className="row">
            <div className="col">
              <h1 className="title">Sign Up</h1>
            </div>
            <div className="py-1 row">
              <div className="col">
                <label htmlFor="" className="form-label">
                  {/* First Name */}
                </label>
                {/* Spread Operator make copy of person, set firstName to e.target.value*/}
                <input
                  ref={firstNameRef}
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
                  ref={lastNameRef}
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
                  id="password"
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
                  id="password"
                  type="text"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="row">
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
export default FormUseRef;
