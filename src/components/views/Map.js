import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {

	constructor(){
		super();
		this.state = {
			map: null
		};
	}

	zoomChanged(){
		// console.log('zoomChanged: '+this.state.map.getZoom())
	}

	mapLoaded(map){
		if (this.state.map != null)
			return;
	}



	render(){
		const markers = this.props.markers || [];

		return (
			<GoogleMap
				ref={this.mapLoaded.bind(this)}
				defaultZoom={this.props.zoom}
				defaultCenter={this.props.center}
				center={this.props.center}
				>
				{markers.map((marker, index) => (
					<Marker
						key={index}
						clickable={true}
						icon={marker.icon}
						label={marker.label}
						{...marker} />
				)
				)}
			</GoogleMap>
		);
	}
}

export default withGoogleMap(Map);
