import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext) //setUser from UserContextProvider
    const handleSubmit = (e) => {
        e.preventDefault() //value don't go anywhere(don't go using-url or anything)
        setUser({username, password})
    }

return (
<div>
    <h2>LogIn</h2>
    <input type="text"
    value={username}
    onChange={(e) =>setUsername(e.target.value)}
     placeholder="username"/>

    <input type="text"
    onChange={(e) =>setPassword(e.target.value)}
    value={password} 
    placeholder="password"/>
    <button onClick={handleSubmit}>Submit</button>
</div>
)
}

export default Login;