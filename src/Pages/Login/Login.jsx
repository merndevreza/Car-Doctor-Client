import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { login, googleLogin, githubLogin, fbLogin, twitterLogin } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        console.log(result.user);
        const successUser={email}
        // navigate after login
        // navigate(location?.state ? location.state : "/");
        //get access token
        axios.post("http://localhost:3000/jwt",successUser)
        .then(res=>{
          console.log(res.data);
        })
        .catch(error=>{
          console.log(error);
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //FB Didn't worked
  const handleFBLogin = () => {
    fbLogin()
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleTwitterLogin = () => {
    twitterLogin()
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // console.log(user);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <h2 className="text-center mb-4">or Sign Up with</h2>
          <div className="flex gap-3 justify-center mb-7">
            <button onClick={handleGoogleLogin} className="btn">
              Google
            </button>
            <button onClick={handleFBLogin} className="btn">
              Facebook
            </button>
            <button onClick={handleTwitterLogin} className="btn">
              Twitter
            </button>
            <button onClick={handleGithubLogin} className="btn">
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
