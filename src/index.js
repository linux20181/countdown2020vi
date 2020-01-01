import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import HappyNewYear from './HappyNewYear';
import Time from './Time';
const renderer = ({days, hours, minutes, seconds ,completed }) => {
    if(completed){
       return <HappyNewYear />
    }else{
       return <Time days = {days} hours={hours} minutes = {minutes} seconds = {seconds}  completed ={completed}/>
    }
}
ReactDOM.render(
  (
  <Countdown date={Date.now() + 60000} renderer= {renderer} > 
    </Countdown>
  ),
  document.getElementById('root')
);
//'2020-01-01T11:03:50' renderer= {renderer}