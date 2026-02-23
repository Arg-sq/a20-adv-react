import axios from "axios";
import React from "react";
import { BASEURL } from "../pages/users";

const UserCard = ({ userDetail, setUsers, setShowForm }) => {
  const deleteUser = async () => {
    try {
      await axios.delete(`${BASEURL}/users/${userDetail.id}`);
      setUsers(
        (prevUser) => prevUser.filter((user) => user.id !== userDetail.id),
        //   arr.filter(num=>num!==9)
      );
      console.log("User deleted:", userDetail.id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <p>{userDetail?.name}</p>
      <p>{userDetail?.email}</p>
      <p>{userDetail.address?.street}</p>
      <div>
        <button
          style={{
            cursor: "pointer",
          }}
          onClick={() => setShowForm((prev) => !prev)}
        >
          edit
        </button>
        <button
          style={{
            backgroundColor: "red",
            cursor: "pointer",
          }}
          onClick={deleteUser}
        >
          delete
        </button>
      </div>
    </div>
  );
};
//
export default UserCard;
