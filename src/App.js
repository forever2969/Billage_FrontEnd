import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from './page/Detail';
import Login from './page/Login';
import Main from './page/Main';
import Mypage from './page/Mypage';
import Signup from './page/Signup';
import Footer from './component/Footer';
import Search from './page/Search';
import Createpost from './page/Createpost';
import './App.css';
import {Store} from './contexts/Stroe.js';
import {useState} from 'react';

function App() {
  const [filterData,setFilterData] = useState([]);

  return (
    <>
      <Store.Provider value={{filterData,setFilterData}}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:productId" element={<Detail />}/>
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Mypage/:userId" element={<Mypage />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/write" element={<Createpost />} />
        </Routes>
      </Store.Provider>
      <Footer />
    </>
  );
}

export default App;