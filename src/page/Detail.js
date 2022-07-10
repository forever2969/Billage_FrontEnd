import React from 'react';
import Post from '../component/Post';
import Product from '../component/Product';
import Header from './../component/Header';
import { useParams } from 'react-router-dom';
import { getFrontEndPeple } from '../data/FrontEndInfo';
import Myinfo from '../component/Myinfo';
import Reply from './../component/Reply';

function Detail() {
    const params = useParams();
    const person = getFrontEndPeple(parseInt(params.productId));
    console.log(person);
    return (
        <>
            <div style={{textAlign:'center', width:'80%' , border:"2px blue solid" , margin:"auto"}}>
                <div>
                    {/* 헤더 컴포넌트 */}
                    <Header/>
                    <h2 style={{textAlign:'left', fontWeight:'bold', backgroundColor:'#6667AB', margin:'0px '}}>상세페이지</h2>
                    {/* 프로덕트 컴포넌트, props를 person으로 선언하고 불러오기 위함 */}
                    <div style={{backgroundColor:'#6667AB'}}>
                        <Product person={person}/>  
                    </div>
                    <h4 style={{textAlign:'left'} }>
                        {/* 신상 컴포넌트, props를 person으로 선언하고 불러오기 위함 */}
                        <Myinfo person={person}/>
                        <div style={{border:'2px solid white', borderTop:'0px', borderBottom:'0px'}}>
                            <p style={{fontSize:'18px'}}>{person.age}</p>
                            <p style={{fontSize:'18px'}}>{person.department}</p>
                            <p style={{fontSize:'18px'}}>{person.MBTI}</p>
                            <p style={{fontSize:'18px'}}>{person.detail}</p>
                        </div>
                    </h4>
                    <div style={{border:'2px solid orange'}}>
                        <Reply />
                    </div>
                    <Post />
                </div>
            </div>
        </>
    );
};

export default Detail;