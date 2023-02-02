import { Link } from "react-router-dom";
import Header from "../components/Header";

  return (
    <>
      <Header />
      <section className="w-full min-h-screen">
        <div className="overlay w-full h-screen bg-white flex flex-col justify-center items-center mt-[80px]">
          <div className="px-6 py-44 w-full">
            <div className="text-center">
              <h1 className="text-[2rem] font-bold text-black">Register</h1>
              <p>
                Have an Account already?
                <Link to="/login" className="text-blue-500 cursor-pointer">
                  {" "}
                  Log in
                </Link>
              </p>
            </div>
            {/* register form */}
            <form>
              <div className="font-light space-y-4 mt-8 py-6 w-full rounded-lg sm:px-8 sm:w-[90%] lg:w-[45%] sm:bg-[#EFF6FF] mx-auto">
                {/* first name */}
                <div>
                  <label htmlFor="firstname">First name</label>
                  <input
                    className="reg-input"
                    id="firstname"
                    placeholder="Enter your first name"
                    type="text"
                    required
                  />
                </div>
                {/* last name */}
                <div>
                  <label htmlFor="lastname">Last name</label>
                  <input
                    className="reg-input"
                    id="lastname"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                {/* email address */}
                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    className="reg-input"
                    id="email"
                    placeholder="Enter your email adress"
                    type="email"
                    required
                  />
                </div>
                {/* phone number */}
                <div>
                  <label htmlFor="firstname">Phone number</label>
                  <input
                    className="reg-input"
                    id="phone-number"
                    placeholder="Enter your phone Number"
                    type="number"
                    required
                  />
                </div>
                {/* password */}
                <div>
                  <label htmlFor="firstname">Password</label>
                  <input
                    className="reg-input"
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    required
                  />
                </div>

                <div>
                  <button className="text-white bg-blue-500 reg-input border-transparent mt-4 hover:opacity-80">
                    Submit
                  </button>
                  <p className="text-sm pt-3">
                    By clicking submit, you agree to our
                    <a className="text-blue-500 cursor-pointer font-semibold">
                      {" "}
                      Terms & conditions
                    </a>{" "}
                    and
                    <a className="text-blue-500 cursor-pointer font-semibold">
                      {" "}
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
