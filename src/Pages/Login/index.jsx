import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../Login/login.css';

export default function LoginPage(){
    const initialInput ={
        email: '',
        password: '',
        lembrar: false
    }

    const [input, setInput] = useState(initialInput)

    function handleChange(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    function lembrarLogin(e){
        setInput({...input, [e.target.name]: e.target.checked})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input)
    }
    return (
        <div className="container">
            <div className="login-box">
                <form className="formulario-login" onSubmit={handleSubmit}>
                    <div className="login-input">
                        <input type="text" value={input.email} name="email" placeholder="email" onChange={handleChange}/>               
                        <input type="password" value={input.senha} name="password" placeholder="Senha" onChange={handleChange} />
                    </div>
                        <div className="login-options">
                        <div className="lembrar-senha">
                            <input type="checkbox" name="lembrar" className="lembrar-senha" onChange={lembrarLogin}/>
                            <label htmlFor="lembrar">Lembrar senha?</label>
                        </div>
                        <button type="submit">Entrar</button>
                    </div>
                    <p className="criar-conta">Não tem uma conta ainda? <NavLink to='/signup'>Crie uma!</NavLink> </p>
                </form>
            </div>
        </div>
    )
}