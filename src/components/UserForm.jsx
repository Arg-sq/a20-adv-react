import React from "react";

const UserForm = () => {
  return (
    <form>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <input placeholder="enter your name" />
        <input placeholder="enter your email" type="email" />

        <button>submit</button>
      </div>
    </form>
  );
};

export default UserForm;
