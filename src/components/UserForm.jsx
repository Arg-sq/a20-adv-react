import React, { useState } from "react";

const UserForm = ({ editId, users }) => {
  const editUserDetail = users.find((user) => user.id === editId);

  const [formData, setFormData] = useState({
    name: editUserDetail.name,
    email: editUserDetail.email,
  });

  console.log(editUserDetail, "id is from form");
  return (
    <form>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <input value={formData.name} placeholder="enter your name" />
        <input
          value={formData.email}
          placeholder="enter your email"
          type="email"
        />

        <button>submit</button>
      </div>
    </form>
  );
};

export default UserForm;
