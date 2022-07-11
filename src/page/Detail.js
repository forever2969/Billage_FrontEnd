import React,{useState,useEffect} from 'react';
import Post from '../component/Post';
import Product from '../component/Product';
import Header from './../component/Header';
import { useParams } from 'react-router-dom';
import Myinfo from '../component/Myinfo';
import Reply from './../component/Reply';
import axios from 'axios';

function Detail() {
    const params = useParams();
    
    const [detailPost,setDetailPost] = useState([]);
    const [totalPost,setTotalPost] = useState([]);

    async function getTotalPost()
    {
        // 전체 데이터 불러오기
        const resultTotalPost = await axios.get('/board/').then((res)=>{return res.data});
        setTotalPost(resultTotalPost);
        const resultDetailPost = resultTotalPost.find((ele)=>{return ele.id === parseInt(params.productId)});
        setDetailPost(resultDetailPost);         
    }

    useEffect(()=>{
        getTotalPost();
    },[])
    console.log(totalPost);
    return (
        <>
            <div style={{textAlign:'center', width:'80%' , border:"2px blue solid" , margin:"auto"}}>
                <div>
                    {/* 헤더 컴포넌트 */}
                    <Header/>
                    <h2 style={{textAlign:'left', fontWeight:'bold', backgroundColor:'#6667AB', margin:'0px '}}>상세페이지</h2>
                    {/* 프로덕트 컴포넌트, props를 person으로 선언하고 불러오기 위함 */}

                    <div style={{backgroundColor:'#6667AB'}}>
                        <Product product={detailPost}/>
                    </div>

                    <h4 style={{textAlign:'left'} }>
                        {
                            console.log(detailPost)
                        }
                        {/* 신상 컴포넌트, props를 person으로 선언하고 불러오기 위함 */}
                        <Myinfo product={detailPost}/>

                        <div style={{border:'2px solid white', borderTop:'0px', borderBottom:'0px'}}>
                            <p style={{fontSize:'18px'}}>{detailPost.price}</p>
                            <p style={{fontSize:'18px'}}>{detailPost.title}</p>
                            <p style={{fontSize:'18px'}}>{detailPost.description}</p>
                            <p style={{fontSize:'18px'}}>{detailPost.category}</p>
                        </div>

                    </h4>
                    <div style={{border:'2px solid orange'}}>
                        <Reply />
                    </div>
                    <Post totalPost={totalPost} />
                </div>
            </div>
        </>
    );
};

export default Detail;