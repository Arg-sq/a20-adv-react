// import React from 'react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";

export const BASEURL = "https://jsonplaceholder.typicode.com";
const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get(`${BASEURL}/users`);
        setUsers(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <UserForm />
      {users?.map((user) => {
        return <UserCard key={user.id} userDetail={user} setUsers={setUsers} />;
      })}
    </div>
  );
};

export default Users;
