import {useState} from "react";
import FieldInput from "./inputField";
import Boton from "./boton";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('Username: ', username);
        console.log('Password: ', password);
};

return (
    <div>
        <h1>Login</h1>
        <FieldInput
            type = 'text'
            placeholder = 'Username'
            value = {username}
            onChange = {(e) => setUsername(e.target.value)}/>

        <FieldInput
            type = 'text'
            placeholder = 'Password'
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}/>
        <Boton
            label = "Submit"
            onClick = {handleSubmit}/>
    </div>
    );
};

export default Login