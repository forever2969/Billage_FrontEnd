import React,{useEffect,useState} from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';
import Post from '../component/Post';
import AddModal from '../modal/AddModal';
import AlramModal from '../modal/AlramModal';
import axios from 'axios';

function Main() {
    const [totalPost,setTotalPost] = useState([]);
    useEffect(()=>{
        axios.get('/board/')
        .then(res=>{
            setTotalPost(res.data);
        })
        .catch(e=>console.log(e))
    },[]);
    
    return (
        <>
            <div style={{textAlign:'center', width:'80%' , border:"2px blue solid" , margin:"auto"}}>
                <div>
                    {/* 헤더 컴포넌트 */}
                    <Header/>
                    <div style ={{border:'2px solid grey', borderLeft:'0px', borderRight:'0px', padding:'10px', textAlign:'center', backgroundColor:'#6667AB'}}>
                        <img style = {{textAlign:'center', width:'70%'}} src='/Home_image.png' alt='이미지 없습니다'/>
                    </div>
                    {/* 공통 컴포넌트 밑에 출력하기 위해 아울렛 */}
                    
                    <Outlet/>
                    {/* 게시글 컴포넌트 */}
                    <Post totalPost={totalPost} />
                    <AddModal />
                    <AlramModal value={true} />
                </div>
            </div>
        </>
    );
}

export default Main;