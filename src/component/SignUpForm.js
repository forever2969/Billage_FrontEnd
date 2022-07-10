import { useRef , useState } from 'react';

const SignUpForm = () => {
    const mailInput = useRef();
    const pwInput = useRef();
    const confirmPwInput = useRef();
    const phoneInput = useRef();
    const nameInput = useRef();
    let mailPush = '';

    const [signUpData,setSignUpData] = useState({
        mail:"",
        pw:"",
        confirmPw:"",    
        phone:"",
        name:"", 
    });
    const handleChangeData = (e) => {
        //mailPush = `${signUpData.mail}@kumoh.ac.kr`;
        
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,
        });
    };


    
    const onSubmitSignUp = (e)=>{
        e.preventDefault();
        
        console.log(signUpData);
    }

    return (
        <div>
            <form id="signUpForm" onSubmit={onSubmitSignUp}>
                <p>웹 메일</p>
                <input type="text" value={signUpData.mail} name='mail' useref={signUpData.mail} onChange={handleChangeData} style={{width:"40%"}} />
                <label>@kumoh.ac.kr</label>
                <p>비밀번호</p>
                <input type="password" onChange={handleChangeData} name='pw' useref={signUpData.Pw} value={signUpData.Pw} />
                <p>비밀번호 확인</p>
                <input type="password" onChange={handleChangeData} name='confirmPw' useref={signUpData.comfirmPw} value={signUpData.comfirmPw} />
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