import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";

const Login = () => {
  const { handleLoginChange, login, loader } = useAppContext();
  return (
    <>
      {loader && <Loader />}

      <Header />
      <section className="w-full min-h-screen">
        <div className="overlay w-full h-screen bg-white flex flex-col justify-center items-center mt-[80px]">
          <div className="px-6 py-44 w-full">
            <div className="text-center">
              <h1 className="text-[2rem] font-bold text-black">Login</h1>
              <p>
                Don't have an Account?
                <Link to="/register" className="text-blue-500 cursor-pointer">
                  {" "}
                  Sign up
                </Link>
              </p>
            </div>
            {/* register form */}
            <form>
              <div className="font-light space-y-4 py-10 w-full rounded-lg sm:mt-8 sm:px-8 sm:w-[90%] lg:w-[45%] sm:bg-[#EFF6FF] mx-auto">
                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    className="login-input"
                    id="email"
                    onChange={handleLoginChange}
                    placeholder="Enter your email adress"
                    type="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="firstname">Password</label>
                  <input
                    className="login-input"
                    id="password"
                    onChange={handleLoginChange}
                    placeholder="Enter your password"
                    type="password"
                    required
                  />
                </div>

                <div className="space-x-2">
                  <input id="remember-me" type="checkbox" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>

                <div>
                  <button
                    onClick={login}
                    className="text-white bg-blue-500 login-input mt4 mb-3 border-transparent hover:opacity-80"
                  >
                    LOG IN
                  </button>
                  <a className="text-blue-500 font-light cursor-pointer">
                    Forgot password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
