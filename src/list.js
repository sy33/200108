import React, { Component } from 'react';
import './list.css';

// const listImg = ["././img/bg_1.png","././img/concert.jpg" ,"././img/img4.jpg","././img/pakjinyeong.jpg"]
// const listTitle = ["채널 Num.1", "채널 Num.2", "채널 Num.3", "채널 Num.4"]
// const listTime = ["방송시간: 17:00 ~ 18:30", "방송시간: 07:00 ~ 08:00", "방송시간: 12:00 ~ 13:30", "방송시간: 00:00 ~ 01:10"]


class List extends Component {

    render(){
        return(
            <div className="wrap">
                <a href="#" className="list">
                    <img src="././img/bg_1.png" />
                    <h3>채널 Num.1</h3>
                    <p>방송시간: 17:00 ~ 18:30</p>
                </a>
                <a href="#" className="list">
                    <img src="././img/concert.jpg" />
                    <h3>채널 Num.1</h3>
                    <p>방송시간: 17:00 ~ 18:30</p>
                </a>
                <a href="#" className="list">
                    <img src="././img/img4.jpg" />
                    <h3>채널 Num.1</h3>
                    <p>방송시간: 17:00 ~ 18:30</p>
                </a>
                <a href="#" className="list">
                    <img src="././img/pakjinyeong.jpg" />
                    <h3>채널 Num.1</h3>
                    <p>방송시간: 17:00 ~ 18:30</p>
                </a>
            </div>
        )
    }
}

export default List