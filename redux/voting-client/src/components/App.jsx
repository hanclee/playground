import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

var createReactClass = require('create-react-class');

export default createReactClass({
  mixins: [PureRenderMixin],
  render: function() {
    return this.props.children;
  }
});
