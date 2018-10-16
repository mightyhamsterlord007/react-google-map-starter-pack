import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAddress } from '../../actions/locationAction';

class Input extends Component {

  state = {
      
  }

  onInputChange = (event) => {

    this.setState({
        [event.target.name]: event.target.value
    })

  }

  onSubmitAddress = (event) => {
      event.preventDefault();
      this.props.getAddress(this.state);
  }

  render() {
    return (
<form onSubmit={this.onSubmitAddress}>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" name='address1' onChange={this.onInputChange} placeholder="1234 Main St" />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" name='address2' onChange={this.onInputChange} placeholder="Apartment, studio, or floor" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" name='city' onChange={this.onInputChange} />
    </div>
  </div>
  <div className="form-group col-md-6">
      <label htmlFor="inputState">State</label>
      <input type="text" className="form-control" name='state' onChange={this.onInputChange}/>
    </div>
  <div className="form-group col-md-6">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" name='zip' onChange={this.onInputChange}/>
    </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>

    )
  }
}

export default connect(null, {getAddress})(Input);
