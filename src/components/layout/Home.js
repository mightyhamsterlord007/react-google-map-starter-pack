import React, { Component } from 'react'
import { Search, Input } from '../containers';

import { getUserCurrentLocation } from '../../actions/locationAction';
import { connect } from 'react-redux';

class Home extends Component {


  componentWillMount() {
    this.props.getUserCurrentLocation();
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
            <div className="col-8">
              <Search />
            </div>
            <div className="col-4">
              <Input />
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default connect(null, { getUserCurrentLocation })(Home);