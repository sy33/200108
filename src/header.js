import React, { Component } from 'react';
import './header.css'

class Header extends Component {

    render(){
        return(
            <div className="header-top">
                <h1>WebTV</h1>
                <span>코믹</span>
                <span>드라마</span>
                <span>시사/교양</span>
                <p>로그인</p>
            </div>

        )
    }
}

export default Header;