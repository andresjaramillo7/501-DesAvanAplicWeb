import { useState } from "react";
import Login from "./Login.tsx";
import Button from "./components/Button.tsx";
import "./Class3.css"

function Class3() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Class1" onClick={() => document.location = "../../class1/A01027983/class1.html"} />
          <Button label="Class2" onClick={() => document.location = "../../class2/A01027983/class2.html"} />
          <Button label="Class3" />
          <Button label="Main Page" onClick={() => document.location= "/"} />
        </div>
      </div>
      <h1>Class 3 Example A01027983</h1>
      <Login />
    </>
  )
}

export default Class3
