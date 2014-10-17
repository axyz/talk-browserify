var React = require('react');

var InputComparatorUI     = require('./input-comparator-ui.jsx')
  , InputComparatorOutput = require('./input-comparator-output.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      input1: '',
      input2: ''
    }
  },
  handleUserInput: function(input1, input2) {
    this.setState({
      input1: input1,
      input2: input2
    })
  },
  render: function() {
    return (
      <div className="input-comparator">
        <h1 className="input-comparator__title">{this.props.title}</h1>
        <InputComparatorUI
          input1={this.state.input1}
          input2={this.state.input2}
          onUserInput={this.handleUserInput}
        />
        <InputComparatorOutput
          comparator={this.props.comparator}
          input1={this.state.input1}
          input2={this.state.input2}
        />
      </div>
    )
  }
});
