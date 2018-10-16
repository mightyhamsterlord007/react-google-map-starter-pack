import React, { Component } from 'react';
import { Map } from '../views';
import { connect } from 'react-redux';


class Search extends Component {

	constructor(){
		super();
		this.state = {
			map: null,
			currentUserLocation: null,
			zoom: 14
		};
	}


	render(){
		

		const lngCurrentLocation = this.props.map.currentLocation.lng;
		const latCurrentLocation = this.props.map.currentLocation.lat;
		console.log(this.props.map.allLocations)
		return(
			<div>
				<div className="sidebar-wrapper">


					<Map
					// 	markers={[
					// 			{
					// 				position: {
					// 					lat: latCurrentLocation, lng: lngCurrentLocation
					// 			}
					// 			},
					// 			{
					// 				position: {
					// 					lat: 40.7224017, lng: -73.9896719
					// 				}
					// 			}
					// ]}
					    markers={this.props.map.allLocations}
						zoom={this.state.zoom}
						center={{lat: latCurrentLocation, lng: lngCurrentLocation}}
						//center={this.props.map.currentLocation}
						containerElement={<div style={{height:100+'%'}} />}
						mapElement={<div style={{height:100+'vh'}} />}
					/>


				</div>
			</div>
		);
	}
}

const stateToProps = (state) => {
	return {
		map: state.map
	}
}

export default connect(stateToProps,  null)(Search);
