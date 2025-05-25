import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("Shubham@mail.com");
  const [password, setPassword] = useState("Shubham@90855");
  const [error,setError]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogIn = async () => {
    try {
      const res = await axios.post(
          BASE_URL + "/login",
        {
          emailId:emailId,
          password:password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
      console.log(err);
    }
  };
  return (
    <div className="hero w-screen h-screen bg-base-200">
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                value={emailId}
                className="input"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                value={password}
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-error">{error}</p>
          <div className="card-actions justify-center m-2">
            <button
              className="btn btn-primary text-zinc-900"
             // className="btn btn-primary"
              onClick={handleLogIn}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
