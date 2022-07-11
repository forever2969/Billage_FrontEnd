import { useRef , useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
    const mailInput = useRef();
    const pwInput = useRef();
    const confirmPwInput = useRef();
    const phoneInput = useRef();
    const nameInput = useRef();
    const [confirmPw,setConfirmPw] = useState('');

    const navigate = useNavigate();

    const [signUpData,setSignUpData] = useState({
        email:"",
        member_id:123457,
        name:"",    
        phone:"",
        password:"",
    });
    const handleChangeData = (e) => {
        
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,
        });
    };


    
    const onSubmitSignUp = (e)=>{
        e.preventDefault();

        if (signUpData.password === confirmPw){
            
            axios({
                url:'/accounts/signup/',
                method:'post',
                data:{
                    email:`${signUpData.email}@kumoh.ac.kr`,
                    member_id:signUpData.member_id,
                    name:signUpData.name,
                    phone:signUpData.phone,
                    password:signUpData.password,
                },
                headers:{
                    'ContentType':'application/json'
                }
            }).then((res)=>{
                navigate('/login',{replace:true})
            }).catch((e)=>console.log(e))
        }else{
            setConfirmPw('');
            alert('비밀번호가 일치하지 않습니다.');
        }
    }

    return (
        <div>
            <form id="signUpForm" onSubmit={onSubmitSignUp}>
                <p>웹 메일</p>
                <input type="text" value={signUpData.mail} name='email' useref={signUpData.mail} onChange={handleChangeData} style={{width:"40%"}} />
                <label>@kumoh.ac.kr</label>
                <p>비밀번호</p>
                <input type="password" onChange={handleChangeData} name='password' useref={signUpData.Pw} value={signUpData.Pw} />
                <p>비밀번호 확인</p>
                <input type="password" onChange={(e)=>{setConfirmPw(e.target.value)}} name='confirmPw' useref={confirmPw} value={confirmPw} />
                <p>이름</p>
                <input type="text" onChange={handleChangeData} name='name' useref={signUpData.name} value={signUpData.name} />
                <p>전화번호</p>
                <input type="number" onChange={handleChangeData} name='phone' useref={signUpData.phone} value={signUpData.phone} /><br /><br />
                <input type="submit" value="회원가입" style={{width:"65%"}} />
            </form>
        </div>
    );
};

export default SignUpForm;