import React, { useEffect, useState } from "react";

function Github() {
  const [user, setUser] = useState("");
  const [fromData, setData] = useState();

  const fetchUserData = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };


  const whenClicked = () => {
    console.log(`User Name is ${user}`);
    fetchUserData(user);
  };

  return (
    <>
      <div className={`${ whenClicked ? "flex" : "hidden" } flex justify-center items-center gap-5 flex-col p-20 bg-gray-100`}>
        <div className="text-2xl">Login With Github</div>
        <input
          onChange={(e) => setUser(e.target.value)}
          value={user}
          className="bg-gray-200 w-80 h-12 rounded-md text-center outline-none focus:ring-2 focus:ring-indigo-700"
          type="text"
          placeholder="Enter Your UserName"
        />
        <button
          onClick={whenClicked}
          className="bg-orange-700 text-white py-2 px-7 rounded-md duration-200 hover:bg-orange-800"
        >
          Login
        </button>
      </div>
      {fromData && (
        <div className="flex justify-center items-center bg-gray-200 w-full py-20">
          <div>
            <div className="text-left px-5 text-3xl font-light font-sans">
              Name: {fromData.name}
            </div>
            <div className="text-left p-8 text-3xl font-light font-sans">
              Github Followers: {fromData.followers}
            </div>
          </div>
          <img
            className="w-44 rounded-md"
            src={fromData.avatar_url}
            alt="Github-Image"
          />
        </div>
      )}
    </>
  );
}

export default Github;
