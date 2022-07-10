import React from 'react';
import Header from '../component/Header.js';
import '../style/Mypage.css';
import Post from '../component/Post.js';
import Review from '../component/Review.js';

const Mypage = () => {
    return (
        <div>
            <Header />
            <section id="mypageNumber">
                <h2>고유 번호</h2>
            </section>
            <section id="mypagePost">
                <Post />
            </section>
            <section id="mypageReview">
                <Review />
            </section>
        </div>
    );
};

export default Mypage;