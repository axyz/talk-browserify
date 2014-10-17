var React     = require('react')
  , metaphone = require('metaphone');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="input-comparator__output">
        {this.props.comparator(this.props.input1, this.props.input2)}
      </div>
    )
  }
});
