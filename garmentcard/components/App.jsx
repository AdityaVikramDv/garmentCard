import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RateTag from './RateTag.jsx';
import SizeChart from './SizeChart.jsx';

class App extends Component{

		constructor(props){
			super(props);
			
			this.state = {
				"editSizeClicked": false,
				"show":props.defaultSizeSelected
			};
		}

	editSizeClickHandler(){
		this.setState({"editSizeClicked": true});
	}
	newSizeSelected(selected){
		this.setState({
			"editSizeClicked": false,
			"show":selected
		});
	}

	render(){

	
		let card_content = '';

		if(this.state.editSizeClicked){
		card_content = <SizeChart sizesAvailable={this.props.sizesAvailable} defaultSizeSelected={this.state.show} sizeSelected={this.newSizeSelected.bind(this)} editSize={this.editSizeClickHandler}/>;
		}
		else{
		card_content = <RateTag rate={this.props.cost} show={this.state.show} editSize={this.editSizeClickHandler.bind(this)}/>;;	
		}


		return (
			 
                        <div className="col s12 m4">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img src={this.props.url}/>
                                    <span className="card-title">{this.props.title}</span>
                                </div>
                                <div className="card-content">
                                {card_content}
                                </div>
                            </div>
                        </div>
                    
			);
	}
}

export default App