
var TextForm = React.createClass({
	render: function() {
		return(
			<div>Form</div>
		);
	}
});

var Image = React.createClass({
	render: function() {
		return(
			<div>Image</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return(
			<div>
				<TextForm/>
				<Image/>
			</div>
		);
	}
});
ReactDOM.render(<App/>, document.getElementById('content'));