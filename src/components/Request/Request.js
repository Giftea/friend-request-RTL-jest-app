import React from "react";

const Request = ({ name, email, login, picture, index, id, removefriendRequest }) => {
  return (
    <div className="single-request" data-testid={`request-${index}`}>
      <div className="single-request-main">
        <div>
          <img src={picture.medium} alt={name.first} />
        </div>
        <div>
          <p>
            <strong>Name</strong>: {name.first + " " + name.last}{" "}
          </p>
          <p>
            <strong>Username</strong>: {login.username}{" "}
          </p>
          <p>
            <strong>Email</strong>: {email}{" "}
          </p>
        </div>
      </div>
      <div>
        <button className="delete-btn" onClick={() => removefriendRequest(id)}>
          decline
        </button>
      </div>
    </div>
  );
};

export default Request;
