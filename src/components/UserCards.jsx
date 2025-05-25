import React from "react";

const UserCards = ({ users }) => {
  const { firstName, lastName, photoUrl, gender, age, about } = users;
  return (
    <div className="card bg-base-200 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{firstName + " " + lastName}</h2>
        {gender && age && (
          <p>{"Age" + ":" + age + "," + "Gender" + ":" + gender}</p>
        )}
        <p className="text-center">{about}</p>
        <div className="card-actions justify-center my-6 ">
          <button
            //  className="btn btn-primary"
            className="btn btn-primary text-zinc-900"
          >
            Ignore
          </button>
          <button
            //  className="btn btn-primary"
            className="btn btn-primary text-zinc-900"
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
