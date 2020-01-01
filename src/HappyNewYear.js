import React from 'react';
import './App.css';
import { Fireworks } from 'fireworks/lib/react'
import hinhnen from './Assets/img/happy-new-year.jpg';
import audio from './Assets/audio/Happy-New-Year-Remix.mp3';
import ReactAudioPlayer from 'react-audio-player';
class HappyNewYear extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      play:true
    }
  }
  componentDidMount(){
   
  }
 render(){
    let fxProps = {
        count: 1,
        interval: 2000,
        colors: ['#cc3333', '#4CAF50', '#81C784','#ccbd33','#33ccc7','#ccab33','#cc33bf'],
        calc: (props, i) => ({
          ...props,
          x:window.innerWidth / 2,
          y:window.innerWidth / 6
          })
      }
     return(        
      <div>                    
             <h3 class="l1-txt1 txt-center p-b-25">
			        	Happy New Year 2020
		      	</h3>
           <ReactAudioPlayer
            src={audio}
            autoPlay = "true"                   
            />
            <Fireworks {...fxProps} />
        </div>
     )
 }
}
export default HappyNewYear;