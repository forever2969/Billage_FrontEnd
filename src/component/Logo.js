import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Logo.css';

const Logo = ({margin,width}) => {
    const navigate = useNavigate();
    const logoClick = ()=>{
        navigate('/');
    }
    return (
        <>
            <img id="LogoImg" onClick={logoClick} src='/Logo.png' alt='이미지가 없습니다' style={{width:width, margin:margin,cursor:"pointer"}} />
        </>
    );
};

export default Logo;

//사용법 <Logo width="넓이" margin="마진넓이" />