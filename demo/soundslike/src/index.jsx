var React   = require('react');
var InputComparator = require('./react_components/input-comparator.jsx');
var soundslike = require('./lib/soundslike');

React.renderComponent(
  <InputComparator
    title="SoundsLike"
    comparator={soundslike.compareOutput}
  />,
  document.body
);
