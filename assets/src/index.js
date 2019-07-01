import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	state = {
		teste: 'primary'
	}

	setClass = () => {
		this.setState({teste: 'secondary'});
	}

	render() {
		return (
			<div>
				<h1>Hello World! {this.state.teste}</h1>
				<button className={`btn btn-${this.state.teste}`} onClick={this.setClass}>Testando!</button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
