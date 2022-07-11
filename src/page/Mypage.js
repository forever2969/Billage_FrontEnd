import React from 'react';
import Header from '../component/Header.js';
import '../style/Mypage.css';
import Post from '../component/Post.js';
import Review from '../component/Review.js';
import {useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

const Mypage = () => {
    const params = useParams();
    const [userPost,setUserPost] = useState([]);
    const [totalPost,setTotalPost] = useState([]);

    async function getTotalPost(){
        const resultTotalPost = await axios.get('/board/').then((res)=>{return res.data});
        setTotalPost(totalPost);
        const resultMyPost = resultTotalPost.filter((ele)=>{ return ele.writer === parseInt(params.userId)});
        setUserPost(resultMyPost);
    };

    useEffect(()=>{
        getTotalPost();
    },[params.userId]);

    return (
        <div>
            <Header />
            <section id="mypageNumber">
                <h2>{params.userId}</h2>
            </section>
            <section id="mypagePost">
                <Post totalPost={userPost}/>
            </section>
            <section id="mypageReview">
                <Review />
            </section>
        </div>
    );
};

export default Mypage;