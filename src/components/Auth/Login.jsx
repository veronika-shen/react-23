import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (email && password){
            login(email,password);
            navigate('/dashboard');
        }else{
            setErrors("Заполните все поля")
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}/>
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}/>
            {errors && <p style="color:red">{errors}</p>}
            <button type="submit">Войти</button>
        </form>
    )
}