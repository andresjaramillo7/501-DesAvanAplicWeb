import { useState } from "react";
import Login from "./Login.tsx";
import Button from "./components/Button.tsx";
import "./Class2.css"

function Class2() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Class1" onClick={() => document.location = "../../class1/A01027983/class1.html"} />
          <Button label="Class2" />
          <Button label="Class3" onClick={() => document.location = "../../class3/A01027983/class3.html"} />
          <Button label="Main Page" onClick={() => document.location= "/"} />
        </div>
      </div>
      <h1>Class 2 Example A01027983</h1>
      <Login />
    </>
  )
}

export default Class2
