import Axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LoginForm(props) {
    const [myid,setMyid]=useState('');
    const [mypass,setMypass]=useState('');
    const navi=useNavigate();

    //submit 이벤트
    const onSubmitLogin=(e)=>{
        e.preventDefault();
        const url=`/member/login?myid=${myid}&mypass=${mypass}`;
        Axios.get(url)
        .then(res=>{
            if(res.data.success==='yes'){
                /*
                localStorage: 직접 지우기 전에는 브라우저에 남아있음
                sessionStorage: 브라우저 닫으면 지워짐
                */
               sessionStorage.loginok="yes";
               sessionStorage.myname=res.data.myname;
               sessionStorage.myid=myid;
               navi("/")
               window.location.reload();//새로고침
            }else{
                alert("아이디나 비밀번호가 맞지 않습니다");
               sessionStorage.loginok="no";
               sessionStorage.myname="";
               sessionStorage.myid="";
               navi("/")
            }
        })
    }
    return (
        <div className='login'>
            <form onSubmit={onSubmitLogin}>
            <table className='table' style={{width:'300px'}}>
                    <caption align="top"><b>로그인</b></caption>
                    <tbody>
                        <tr>
                            <th style={{width:'100px',backgroundColor:'#b0e0e6'}}>아이디</th>
                            <td className='input-group'>
                                <input type='text' className='form-control' style={{width:'100px'}} placeholder='아이디' required value={myid}
                                onChange={(e)=>{
                                setMyid(e.target.value)
                            }}/>
                            </td>
                        </tr>
                        <tr>
                            <th style={{width:'100px',backgroundColor:'#b0e0e6'}}>비밀번호</th>
                            <td>
                                <input type='password' className='form-control' required placeholder='비밀번호' value={mypass}
                                onChange={(e)=>setMypass(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align='center'>
                                <button type='submit' className='btn btn-outline-info' style={{width:'100px'}}>로그인</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default LoginForm;