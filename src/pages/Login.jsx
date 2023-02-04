import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Login = () => {
  const {
    handleLoginChange,
    showPassword,
    login,
    loader,
    togglePassword,
    errorMessage,
  } = useAppContext();
  return (
    <>
      {loader && <Loader />}

      <Header />
      <section className="w-full min-h-screen">
        <div className="w-[95%] mx-auto min-h-screen md:h-[100vh] bg-white md:flex justify-between items-center mt-[80px] md:my-[150px]">
          <div className="w-full px-4 pt-36 md:pt-12 md:py-0 md:w-1/2 md:px-28">
            <div className="text-start">
              <h1 className="text-[2rem] md:text-[3rem] font-bold text-black">
                Welcome back
              </h1>
              <p className="text-slate-500 font-light">
                Welcome back! Please enter your details.
              </p>
            </div>
            {/* Login form */}
            <form>
              <div className="font-light space-y-4 py-6 w-full rounded-lg sm:mt-4 mx-auto">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className="login-input"
                    id="email"
                    onChange={handleLoginChange}
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="firstname">Password</label>
                  <div className="w-full relative">
                    <input
                      className="login-input"
                      id="password"
                      onChange={handleLoginChange}
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

                <div className="flex justify-between">
                  <div className="space-x-2">
                    <input id="remember-me" type="checkbox" />
                    <label htmlFor="remember-me">Remember me</label>
                  </div>

                  <a className="text-blue-500 font-light cursor-pointer">
                    Forgot password?
                  </a>
                </div>

                {errorMessage && (
                  <div className="w-full flex gap-4 items-center py-3 px-10 my-2 bg-red-400/20 text-[0.85rem] rounded-lg border border-red-400">
                    <img
                      alt=""
                      src="/images/icons8-medium-risk-50.png"
                      className="w-6 h-6 mr-1"
                    />
                    <p>{errorMessage}</p>
                  </div>
                )}
                <div>
                  <button
                    onClick={login}
                    className="text-white bg-blue-500 login-input mt4 mb-3 border-transparent hover:opacity-80"
                  >
                    Sign in
                  </button>

                  <p>
                    Don't have an account?
                    <Link
                      to="/register"
                      className="text-blue-500 cursor-pointer"
                    >
                      {" "}
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[45%] h-full bg-reg1 bg-cover bg-no-repeat opacity-70 hidden md:block"></div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Login;
