import React, {Component} from 'react';


class SizeChart extends Component{

	constructor(props){
		super(props);
		this.state = {
		"sizesAvailable":props.sizesAvailable.split(","),
		"defaultSizeSelected":props.defaultSizeSelected,
		"sizeSelected": props.sizeSelected	
		};
	}
	onSizeSelect(index){
		this.setState({defaultSizeSelected: this.state.sizesAvailable[index]});
		this.state.sizeSelected(this.state.sizesAvailable[index]);
	}

	render(){

	         	let sizes = this.state.sizesAvailable;
          		let sizesList = sizes.map((size, index) =>{
          			let activeClass = 'chip hoverable selectable_cursor';
                if (this.state.defaultSizeSelected === size) {
                	activeClass = 'chip orange darken-3 hoverable selectable_cursor';
                }
                return (<li className={activeClass} key={index} onClick={this.onSizeSelect.bind(this, index)}>{size}</li>);
            }.bind(this));
            return (<ul>{ sizesList }</ul>);
                 
	}
	
}

SizeChart.defaultProps = {
		"sizesAvailable":'XXL,XL,L,M,S,XS',
		"defaultSizeSelected":'M',
		"sizeSelected":'M'
}
export default SizeChart