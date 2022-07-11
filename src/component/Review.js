import React,{useState,useEffect} from 'react';
import { getFrontEndInfo } from '../data/FrontEndInfo';
import '../style/Review.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Review = () => {
    const params = useParams();
    const frontEndInfo = getFrontEndInfo();
    const [reviewList,setReviewList] = useState([]);
    const [totalReview,setTotalReview] = useState([]);
    
    useEffect(()=>{
        axios.get('/reviews/review/')
        .then((res)=>{
            console.log(res.data.results);
            setTotalReview(res.data.results);
        })
    },[])
    const filterData = totalReview.filter((review)=>{
        return (parseInt(review.receive_id)===parseInt(params.userId));
    });
    
    
    
    return (
        <div>
            <p>받은 리뷰</p>
            {
            filterData.map((info)=>
                <div className="reviewDataDiv">
                    <span className="reviewData">{info.content}</span>
                </div>
            )
            }
        </div>
    );
};

export default Review;