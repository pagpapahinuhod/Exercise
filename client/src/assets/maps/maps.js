import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';

const LeafletMap = (props: any): any => {
  const mapPositions = [0, 0];
  return(
    <MapContainer
      className = "map"
      center = {[mapPositions[0], mapPositions[1]]}
      zoom = {5}>
        <TileLayer attribution = '&amp;copy <a href = "http://osm.org/copyright">OpenStreetMap</a> contributors' url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </MapContainer>);};

  export default LeafletMap;