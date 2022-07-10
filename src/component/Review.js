import React from 'react';
import { getFrontEndInfo } from '../data/FrontEndInfo';
import '../style/Review.css';

const Review = () => {
    const frontEndInfo = getFrontEndInfo();

    return (
        <div>
            <p>받은 리뷰</p>
            {
            frontEndInfo.map((info)=>
                <div className="reviewDataDiv">
                    <span className="reviewData">{info.detail}</span>
                </div>
            )
            }
        </div>
    );
};

export default Review;