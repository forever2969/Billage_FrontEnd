import React from 'react';
import {Link} from 'react-router-dom';

function Myinfo(props){
    return (
        <div style={{border:'2px solid green', borderRight:'0px', borderLeft:'0px', padding:'2%', paddingLeft:'0px', textAlign:'left'}}>
            {/* 신상 데이터를 받아오기 위해 상위 props인 person에서 데이터 가져옴 */}
            <Link to={`/Mypage/${props.person.name}`}>{props.person.name}</Link>
        </div>
    );
};

export default Myinfo;