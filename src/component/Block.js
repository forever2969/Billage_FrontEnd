import React from 'react';
import { Link } from 'react-router-dom';

function Block(props){
    return (
        // 부트스트랩 이용 해서 블럭 출력
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2' style={{border:'2px solid pink'}}>
            {/* 사진을 클릭하면 페이지 이동을 위함 */}
            <div style={{width:"100%"}}>
                <Link to={`/detail/${props.totalPost.id}`}>
                    <img style={{width:'100%', height:'120px', border:'2px solid red'}} src={props.totalPost.image} alt='사진이 없습니다'/>
                </Link>
            </div>
            
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', marginTop:'1%'}}>
                <div style={{border:'2px solid'}}>
                    {props.totalPost.category}
                </div>
                <div style={{border:'2px solid'}}>
                {props.totalPost.process_status}
                </div>
            </div>
            {/* 글자수가 영역을 넘어가게 되면 ...으로 표시 */}
            <h4 style={{ontSize:'95%', overflow:'hidden', whiteSpace:'nowrap', textOverflow: 'ellipsis'}}>
                {/* 제목, 가격 데이터 받아오기 */}
                {props.totalPost.title}<br/>
                {props.totalPost.price}
                </h4>
        </div>
    );
};
export default Block;