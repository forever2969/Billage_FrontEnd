import React,{useState} from 'react';
import Logo from '../component/Logo';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const navigate = useNavigate();
    const handleInputId = (e) => {
        setInputId(e.target.value);
    };
    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };
    const onClickLogin = () => {
        console.log('click login');
        axios({
            url:'/url/',
            method:'post',
            data:{
                
            },
            headers:{
                'ContentType':'application/json'
            }
        }).then((res)=>{
            console.log(res);
        }).catch((e)=>console.log(e))
    };
    const onClickSignUp = () =>{
        navigate('/signup');
    };
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",padding:"15%"}}>
            <section style={{textAlign:"center"}}>
                <Logo margin="5%" /> 
            </section>
            <section>
                <div>
                    <p>ID</p>
                    <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
                    <label>@kumoh.ac.kr</label>
                </div>
                <div>
                    <p>PW</p>
                    <input type='password' name='input_pw' style={{width:"100%"}} value={inputPw} onChange={handleInputPw} />
                </div>
                <div>
                    <button style={{width:"100%",margin:"5% 0"}} type='button' onClick={onClickLogin}>Login</button>
                </div>
                <div>
                    <button style={{width:"100%"}} type='button' onClick={onClickSignUp}>SignUp</button>
                </div>
            </section>
            
        </div>
    );
};

export default Login;