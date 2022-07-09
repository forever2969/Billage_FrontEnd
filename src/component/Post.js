import React from 'react';
import Block from '../component/Block';
import { getFrontEndInfo } from '../data/FrontEndInfo';

const Post = () => {
    let frontEndInfo = getFrontEndInfo();

    return (
        <>
            <div className='container' style={{width:'100%', border:'2px solid yellow', textAlign:'center'}}>
                <h4 style={{textAlign:'left'}}>게시물</h4>
                <div className='row'>
                    {
                        // id값을 받아와서 이동하기 위함
                        frontEndInfo.map((element)=>(
                                <Block frontEndInfo={element} key={element.id} i={element.id}/>
                        ))
                    }
                </div>
            </div>
        </>
        
    );
};

export default Post;