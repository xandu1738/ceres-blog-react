import React from "react";

const User = () => {
  const user = {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit Repellat quo qui odit deserunt. Molestiae consequuntur corruptiipsam hic harum animi a. Rerum maiores veniam ratione quis aliquam!Porro, quis tempora?",
    imageUrl:
      "https://images.unsplash.com/photo-1560174038-da43ac74f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=557&q=80",

    imageSize: 200,
  };
  return (
    <div>
      <div>
        <div className="profile-pic">
          <img
            src={user.imageUrl}
            alt={"Photo of" + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize,
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="details">
          <p>
            <span>Name:</span> {user.name}
          </p>
          <p>
            <span>Bio:</span> {user.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
