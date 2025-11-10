import React from "react";

type UserCardPropType = {
  name: string;
  avatar: string;
  email: string;
};

const UserCard: React.FC<UserCardPropType> = ({ name, avatar, email }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "12px",
        }}
      />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
