import React from 'react';
import './App.css';
//import hinhnen from './Assets/img/happy-new-year.jpg'
class Time extends React.Component {
constructor(props){
    super(props);
}
componentDidMount(){
}
 render(){
     return(
          <div>
            <h3 class="l1-txt1 txt-center p-b-25">
			        	New Year CountDown 
		      	</h3>
            <span>
              
            <div class="flex-w flex-c-m cd100 p-b-33">
				<div class="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
     <span class="l2-txt1 p-b-9 days">{this.props.days}</span>
					<span class="s2-txt1">Days</span>
				</div>

				<div class="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
     <span class="l2-txt1 p-b-9 hours">{this.props.hours}</span>
					<span class="s2-txt1">Hours</span>
				</div>

				<div class="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
     <span class="l2-txt1 p-b-9 minutes">{this.props.minutes}</span>
					<span class="s2-txt1">Minutes</span>
				</div>

				<div class="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
     <span class="l2-txt1 p-b-9 seconds">{this.props.seconds}</span>
					<span class="s2-txt1">Seconds</span>
				</div>
			</div>
              {/* {this.props.days} ngày {this.props.hours} giờ {this.props.minutes} phút {this.props.seconds} */}
            </span>
         </div>
     )
 }
}

export default Time;