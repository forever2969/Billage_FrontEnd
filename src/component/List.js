import React from 'react';
import { Link } from 'react-router-dom';
import { getFrontEndInfo } from '../data/FrontEndInfo';
import Blockcopy from './Blockcopy';

const List = () => {

    let frontEndInfo = getFrontEndInfo();

    return (
        <>
            <div className='container' style={{border:'2px solid blue', textAlign:'center', margin:'auto'}}>
                <div className='row'>
                    {
                        frontEndInfo.map((element)=>(
                            <Link to={`/detail/${element.id}`} key={element.id} style={{textDecoration:'none', color:'black'}}>
                                {<Blockcopy frontEndInfo={element} id={element.id}/>}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
        
    );
};

export default List;