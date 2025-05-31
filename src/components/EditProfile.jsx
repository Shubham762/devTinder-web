import React, { use, useState } from "react";
import UserCards from "./UserCards";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const EditProfile = ({ user }) => {
  console.log("user", user);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = () => {
    try {
      const res = axios.post(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          about,
          photoUrl,
        },
        { withCredentials: true }
      );
      console.log("while edit", res?.data?.data);
      dispatch(addUser(res?.data?.data));
      setShow(true);
      setTimeout(() => {
          setShow(false);
      },3000)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex  bg-base-200 w-screen my-8">
        <div className="hero w-full  bg-base-200 ">
          <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    value={firstName}
                    className="input"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    type="text"
                    value={lastName}
                    className="input"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Photo Url</legend>
                  <input
                    type="text"
                    value={photoUrl}
                    className="input"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Age</legend>
                  <input
                    type="text"
                    value={age}
                    className="input"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Gender</legend>
                  <input
                    type="text"
                    value={gender}
                    className="input"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">About</legend>
                  <input
                    type="text"
                    value={about}
                    className="input"
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </fieldset>
              </div>
              <p className="text-error">{error}</p>
              <div className="card-actions justify-center m-2">
                <button
                  //  className="btn btn-primary text-zinc-900"
                  className="btn btn-primary"
                  onClick={saveProfile}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-base-200 py-24 p-4">
          <UserCards
            users={{ firstName, lastName, age, gender, about, photoUrl }}
          />
        </div>
      </div>
      {show &&
      <div className="toast toast-top toast-center">  
        <div className="alert alert-success">
          <span>Profile saved successfully.</span>
        </div>
      </div>
      }
    </>
  );
};

export default EditProfile;
