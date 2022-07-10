import React from 'react';
import Header from '../component/Header.js';
import '../style/Mypage.css';
import UserPost from '../component/UserPost.js';
import Review from '../component/Review.js';
import {useParams} from 'react-router-dom';


const Mypage = () => {
    const params = useParams();

    return (
        <div>
            <Header />
            <section id="mypageNumber">
                <h2>{params.userId}</h2>
            </section>
            <section id="mypagePost">
                <UserPost userId={params.userId}/>
            </section>
            <section id="mypageReview">
                <Review />
            </section>
        </div>
    );
};

export default Mypage;