import React,{useState} from 'react';
import Logo from './Logo.js';
import Slogan from './Slogan.js';
import '../style/Header.css';
import {getFrontEndInfo} from '../data/FrontEndInfo';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchData, setSearchData] = useState("");
    const frontEndInfo = getFrontEndInfo();
    const navigate = useNavigate();

    const onChageSearch = (e)=>{
        e.preventDefault();
        setSearchData(e.target.value);
    };
    const searchClick = (e)=>{
        e.preventDefault();
        if(searchData === null || searchData === ''){
            navigate('/search');
            //검색데이터가 없을때 처리
        }else{
            const filterData = frontEndInfo.filter((info)=>{
                return info.name.includes(searchData);
            });
            console.log(filterData);
            //검색 필터로 구현
        }
        setSearchData('');
    };

    return (
        <div id="HeaderDiv">
            <Logo margin="1%" width="10%" />
            <Slogan size="60%" />
            <form onSubmit={e=>searchClick(e)} style={{width:"50%"}}>
                <input id="searchBar" value={searchData} type="text" onChage={onChageSearch} placeholder="찾는 물건을 입력하세요" />
                <button type="submit" id="searchBtn" className="btn btn-primary">검색</button>
            </form>
            <p id="loginSignup"><a href="/login">로그인/회원가입</a></p>
        </div>
    );
};

export default Header;

