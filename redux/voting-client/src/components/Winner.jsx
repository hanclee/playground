import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

var createReactClass = require('create-react-class');

export default createReactClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="winner">
      Winner is {this.props.winner}!
    </div>;
  }
});
