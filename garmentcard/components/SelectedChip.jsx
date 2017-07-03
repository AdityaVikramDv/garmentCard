import React, {Component} from 'react';

class SelectedChip extends Component{
	constructor(props){
		super(props);
		this.state={
			show: props.show
			
		}
	}

	render(){
		return (<span className="badge purple darken-3 white-text selectable_cursor" onClick={this.props.editSize}>{this.state.show}</span>);
	}
}

export default SelectedChip