import React from 'react';
import { Link } from 'react-router-dom';

function Blockcopy(props){
    return (
        // 부트스트랩 이용 해서 블럭 출력
        <div className="ListContainer" style={{border:'2px solid yellow', width:'100%' , display:'flex'}}>
            {/* 사진 부분  */}
            <div style={{border:'2px solid pink', width:'20%'}}>
                {/* 사진을 클릭하면 페이지 이동을 위함 */}
                <Link to={`/detail/${props.frontEndInfo.id}`}><img style={{width:'100%', border:'2px solid red'}} src={props.frontEndInfo.photo} alt='사진이 없습니다'/></Link>
            </div>

            {/* 컨텐츠 내용 부분 */}
            <div style={{border:'2px solid green', width:'80%', textAlign:'left', fontSize:'20px', padding:'1%'}}>
                    {props.frontEndInfo.tag_kinds} &nbsp;
                    {props.frontEndInfo.tag_status} <br/>
                    {props.frontEndInfo.name}<br/>
                    {props.frontEndInfo.age}
            </div>    
            
        </div>
    );
};
export default Blockcopy