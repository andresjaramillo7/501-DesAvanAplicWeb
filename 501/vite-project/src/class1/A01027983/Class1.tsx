import { useState } from "react";
import Login from "./Login.tsx";
import Button from "./components/Button.tsx";
import "./Class1.css"

function Class1() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Class1" />
          <Button label="Class2" onClick={() => document.location = "/src/class2/A01027983/"} />
          <Button label="Class3" onClick={() => document.location = "/src/class3/A01027983/"} />
          <Button label="Main Page" onClick={() => document.location= "/"} />
        </div>
      </div>
      <h1>Class 1 Example A01027983</h1>
      <Login />
    </>
  )
}

export default Class1
