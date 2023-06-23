import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BoardForm, BoardList } from './board';
import { Home, Menu } from './components';
import { LoginForm, MemberForm, MemberList } from './member';
import errorimg from './image/wrongurl.jpg';

function RouteMain(props) {
    return (
        <div>
            <Menu/>
            <br style={{clear:'both'}}/><br/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<LoginForm/>}/>

                <Route path='/member'>
                    <Route path='form' element={<MemberForm/>}/>
                    <Route path='list' element={<MemberList/>}/>
                </Route>

                <Route path='/board'>
                    <Route path='form' element={<BoardForm/>}/>
                    <Route path='list' element={<BoardList/>}/>
                    <Route path='list/:currentPage' element={<BoardList/>}/>
                </Route>

                <Route path='*' element={
                    <div>
                        <h1>잘못된 URL 주소입니다</h1>
                        <img alt='' src={errorimg}/>
                    </div>
                }/>
            </Routes>
        </div>
    );
}

export default RouteMain;