import { useState } from "react";

const App = () => {
  // const college="techspire"
  const [typedName, setTypedName] = useState("");

  const [name, setName] = useState("abc");
  const [password, setPassword] = useState("");

  console.log(password, "----pssss");
  const changeTypedName = (name) => {
    setTypedName(name);
  };
  const changeName = () => {
    setName(typedName);
  };

  const disableButton = name.length === 0 || password.length === 0;
  return (
    <>
      <p>{name}</p>
      <input
        placeholder="enter your name"
        onChange={(event) => changeTypedName(event.target.value)}
      />
      <input
        type="password"
        placeholder="type your password"
        onChange={(jpt) => setPassword(jpt.target.value)}
      ></input>
      <button disabled={disableButton} onClick={changeName}>
        change name
      </button>
    </>
  );
};

export default App;
