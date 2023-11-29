import React, { useState } from "react";
import CustomTextIput from "../../shared/CustomTextIput";

export default function FormPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function validatePass(pass) {
    var re = /^[a-zA-Z0-9]{8,}$/;
    return re.test(pass);
  }

  function sendDataToServer() {
    /* fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data)); */
  }

  function validateForm() {
    if (validateEmail(email) && validatePass(pass)) {
      alert("Form Ok!... Send data to the server?");
      sendDataToServer();
    } else {
      alert("Email: " + email + " Pass: " + pass + " no es valido");
    }
  }

  return (
    <div style={{ padding: "10px" }}>
      <h1>FormPage</h1>
      <CustomTextIput label="Email" value={email} setValue={setEmail} />
      <br />

      <CustomTextIput label="Password" value={pass} setValue={setPass} />
      <br />
      <br />
      <button type="button" onClick={validateForm}>
        Vamos!
      </button>
    </div>
  );
}
