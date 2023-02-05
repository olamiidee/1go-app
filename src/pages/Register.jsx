import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Register = () => {
  const { handleRegChange, loader, register, showPassword, togglePassword } =
    useAppContext();

  return (
    <>
      {loader && <Loader />}
      <Header />
      <section className="block lg:hidden w-full min-h-screen">
        <div className="w-full h-full bg-white flex flex-col justify-center items-center mt-[80px]">
          <div className="px-6 py-12 w-full">
            <div className="text-center">
              <h1 className="text-[2rem] md:text-[3rem] font-bold text-black">
                Register
              </h1>
              <p className="font-light">
                Have an Account already?
                <Link to="/login" className="text-blue-500 cursor-pointer">
                  {" "}
                  Log in
                </Link>
              </p>
            </div>
            {/* register form */}
            <form>
              <div className="font-light space-y-4 mt-6 pb-6 w-full h-full rounded-lg sm:mt-4">
                {/* first name */}
                <div>
                  <label htmlFor="firstname">First name</label>
                  <input
                    className="reg-input"
                    id="firstname"
                    onChange={handleRegChange}
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
                    onChange={handleRegChange}
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
                    onChange={handleRegChange}
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
                    id="phone"
                    onChange={handleRegChange}
                    placeholder="Enter your phone Number"
                    type="number"
                    required
                  />
                </div>
                {/* password */}
                <div>
                  <label htmlFor="firstname">Password</label>
                  <div className="w-full relative">
                    <input
                      className="reg-input"
                      id="password"
                      onChange={handleRegChange}
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <img
                      alt="reveal"
                      src="/images/icons8-eye-30.png"
                      className="w-5 h-5 absolute top-1/2 right-3 translate-y-[-50%] cursor-pointer"
                      onClick={togglePassword}
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={register}
                    className="text-white bg-blue-500 reg-input border-transparent mt-8 hover:opacity-80"
                  >
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
          {/* image */}
          <div className="h-full rounded-r-xl hidden lg:block">
            <img
              src="/images/reg1.jpg"
              className="h-full opacity-70 rounded-r-xl object-fit"
            />
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};
export default Register;
