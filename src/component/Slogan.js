import React from 'react';
import '../style/Slogan.css';

const Slogan = ({size}) => {
    
    return (
        <>
            <p id="SloganMent" style={{fontSize:size,fontWeight:"700"}}><br/><br/>Borrow 빌릴 때, <br />바로 Billage.</p>
        </>
    );
};

export default Slogan;