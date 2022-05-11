import React, { useState, useEffect } from "react";
import Request from "../Request/Request";
import axios from "axios";

const Requests = () => {
  const [loading, setLoading] = useState(true);
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    fetchFriendRequests();
  }, []);

  const fetchFriendRequests = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=5");
      setFriendRequests(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removefriendRequest = (id) => {
    const newfriendRequests = friendRequests.filter(
      (friendRequest) => friendRequest.id !== id
    );
    setFriendRequests(newfriendRequests);
  };

  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }

  if (friendRequests.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no Requests</h2>
          <button className="btn" onClick={() => fetchFriendRequests()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <section>
      <div className="title">
        <h2>friend requests</h2>
        <div className="underline"></div>
      </div>
      <div>
        {friendRequests.map((request, index) => {
          const { login } = request;
          return (
            <Request
              index={index}
              key={login.uuid}
              {...request}
              removefriendRequest={removefriendRequest}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Requests;
