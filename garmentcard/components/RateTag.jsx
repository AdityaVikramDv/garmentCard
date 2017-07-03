import React, {Component} from 'react';
import SelectedChip from './SelectedChip.jsx'


class RateTag extends Component{
    constructor(props){
        super(props);
    }


    editClicked(){
        console.log('paased click to rate tag');
    }
   	render(){
		return (
			     <div>
                    <span><strong>INR </strong> {this.props.rate}/- Only</span>    
                    <SelectedChip show={this.props.show} editSize = {this.props.editSize}/>     
                 </div>
			);
	}
}

export default RateTag