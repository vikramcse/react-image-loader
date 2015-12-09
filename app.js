
var TextForm = React.createClass({
	getInitialState: function() {
		return {
			url: ''
		};
	},
	updateUrl: function() {
		var urlFromTextBox = this.refs.url.value;
		this.setState({
			url: urlFromTextBox
		});
	},
	render: function() {
		return(
			<div>
				<input
					width={this.state.width}
					height={this.state.height} 
					onChange={this.updateUrl}
					ref="url"
					type="text"/> <br/><br/>

				<Image url={this.state.url}/>
			</div>
		);
	}
});

var Image = React.createClass({
	render: function() {
		return(
			<div>
				<img src={this.props.url}/>
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return(
			<div>
				<TextForm/>
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('content'));