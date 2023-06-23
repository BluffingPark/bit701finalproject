import Axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';

function Menu(props) {
    
        const loginStatus = sessionStorage.loginok;
        let navLinkText = '';
      
        if (loginStatus === 'no') {
          navLinkText = '로그인';
        } else if (loginStatus ==='yes') {
          const myName=sessionStorage.myname;
          navLinkText = `로그아웃 ${myName}님`;
        }
    return (
        <ul className='menu'>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/member/form"}>회원가입</NavLink>
            </li>
            <li>
                <NavLink to={"/member/list"}>회원목록</NavLink>
            </li>
            <li>
                <NavLink to={"/board/list"}>게시판</NavLink>
            </li>            
                {
                    sessionStorage.loginok==null || sessionStorage.loginok==='no'?
                    <li>
                        <NavLink to={"/login"}>로그인</NavLink>
                    </li>:
                    <div>
                        <li style={{width:'200px',backgroundColor:'pink',cursor:'pointer'}} onClick={()=>{
                            sessionStorage.removeItem("loginok");
                            sessionStorage.removeItem("myid");
                            sessionStorage.removeItem("myname");
                            window.location.reload();
                        }}>로그아웃 {sessionStorage.myname}님

                        </li>
                    </div>
                }
                
            
            
        </ul>
    );
}

export default Menu;