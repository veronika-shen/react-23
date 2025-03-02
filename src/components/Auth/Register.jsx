import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Register(){
    const [formData, setFormData] = useState({
        email:'',
        firstName:'',
        lastName:'',
        birthDate:'',
        password:'',
        confirmPassword:''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newErrors = {};

        if (!formData.email) newErrors.email = "Введите email";
        if (!formData.firstName) newErrors.firstName = "Введите имя";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Пароли не совпадают"

        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0){
            navigate('/dashboard')
        }
    };

    return(
        <form>
            <input
                type="email"
                placeholder="Email"
                name='email'
                value={formData.email}
                onChange={handleChange}/>
            {errors.email && <p style="color: red">{errors.email}</p>}
            <input
                type="firstName"
                placeholder="Имя"
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}/>
            {errors.firstName && <p style="color: red">{errors.firstName}</p>}
            <input
                type="password"
                placeholder="Пароль"
                name='password'
                value={formData.password}
                onChange={handleChange}/>
            <input
                type="password"
                placeholder="Подтвердите пароль"
                name='password'
                value={formData.confirmPassword}
                onChange={handleChange}/>
            {errors.confirmPassword && <p style="color: red">{errors.confirmPassword}</p>}
        </form>
    )
}