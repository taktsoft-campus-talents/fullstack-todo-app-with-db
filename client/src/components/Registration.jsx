import { useState } from "react";
import axios from "axios";

function Registration({ user, loginUser }) {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputValue, setInputValue] = useState({ email: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const API_URL = import.meta.env.VITE_API_HOST;

    const response = await axios.post(`${API_URL}/users`, inputValue);
    console.log(response.data);

    if (response.data) {
      loginUser(response.data.user);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(event) => {
          setInputValue({ ...inputValue, email: event.target.value });
        }}
      />
      <button>Submit</button>
    </form>
  );
}

export default Registration;
