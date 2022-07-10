import React from 'react';
import Block from './Block';
import { getFrontEndInfo } from '../data/FrontEndInfo';

const Post = ({userId}) => {
    let frontEndInfo = getFrontEndInfo();
    const filterData = frontEndInfo.filter((post)=>
        (userId === post.name)
    );
    console.log(filterData);
    return (
        <>
            <div className='container' style={{width:'100%', border:'2px solid yellow', textAlign:'center'}}>
                <h4 style={{textAlign:'left'}}>게시물</h4>
                <div className='row'>
                    {
                        // id값을 받아와서 이동하기 위함
                        filterData.map((element)=>(
                                <Block frontEndInfo={element} key={element.id} i={element.id}/>
                        ))
                    }
                </div>
            </div>
        </>
        
    );
};

export default Post;