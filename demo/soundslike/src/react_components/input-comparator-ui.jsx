var React = require('react');

module.exports = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.input1.getDOMNode().value,
      this.refs.input2.getDOMNode().value
    )
  },
  render: function() {
    return (
      <form className="input-comparator-ui">
        <input
          className="input-1"
          type="text"
          name="input1"
          ref="input1"
          value={this.props.input1}
          onChange={this.handleChange}
        />
        <input
          className="input-2"
          type="text"
          name="input2"
          ref="input2"
          value={this.props.input2}
          onChange={this.handleChange}
        />
      </form>
    )
  }
});
