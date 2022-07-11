import React,{useSearchParams, useEffect,useState} from 'react';
import { Link,useLocation } from 'react-router-dom';
import Blockcopy from './Blockcopy';
import axios from 'axios';
import {Store} from '../contexts/Stroe.js';

const List = () => {
    const [totalPost,setTotalPost] = useState([]);
    const location = useLocation();

    const [realSearchData,setRealSearchData] = useState('');
    useEffect(()=>{
        axios.get('/board/')
        .then((res)=>{
            const decodeUri = decodeURI(location?.search);
            const searchData = decodeUri.split('?search=');
            setRealSearchData(searchData[1]);
            console.log(realSearchData);
            setTotalPost(res.data);
        })
    },[]);
    const filterData = totalPost.filter((post)=>{
        console.log(post.title);
        console.log(realSearchData);
        return (post.title === realSearchData);
    })

    return (
        <>
            <div className='container' style={{border:'2px solid blue', textAlign:'center', margin:'auto'}}>
                <div className='row'>
                    {
                        filterData.map((element)=>(
                            <Link to={`/detail/${element.id}`} key={element.id} style={{textDecoration:'none', color:'black'}}>
                                
                                {<Blockcopy product={element} id={element.id}/>}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
        
    );
};

export default List;