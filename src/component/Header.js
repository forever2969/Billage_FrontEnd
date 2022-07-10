import React,{useState,useEffect} from 'react';
import Logo from './Logo.js';
import Slogan from './Slogan.js';
import '../style/Header.css';
import {getFrontEndInfo} from '../data/FrontEndInfo';
import { useNavigate,useSearchParams,useLocation } from 'react-router-dom';

const Header = () => {
    const [searchData, setSearchData] = useState("");
    const frontEndInfo = getFrontEndInfo();
    const [searchParams,setSearchParams] = useSearchParams();
    const search = (searchParams.get("searchData"));
    const location = useLocation();
    
    useEffect(() => {
        console.log(location);
      }, [ location ])

    const navigate = useNavigate();
    const onChageSearch = (e)=>{
        e.preventDefault();
        setSearchData(e.target.value);
    };
    const searchClick = (e)=>{
        e.preventDefault();
        navigate(`/search/?search=${searchData}`);
        setSearchData('');
    };

    return (
        <div id="HeaderDiv">
            <Logo margin="1%" width="10%" />
            <Slogan size="60%" />
            <form onSubmit={searchClick} style={{width:"50%"}}>
                <input id="searchBar" value={searchData} type="text" onChange={onChageSearch} placeholder="찾는 물건을 입력하세요" />
                <button type="submit" id="searchBtn" className="btn btn-primary">검색</button>
            </form>
            <p id="loginSignup"><a href="/login">로그인/회원가입</a></p>
        </div>
    );
};

export default Header;

