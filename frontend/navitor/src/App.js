import * as React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map , {Marker , Popup} from 'react-map-gl';
import "./App.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import PlaceIcon from '@mui/icons-material/Place';

const MY_ACCESS_TOKEN = "pk.eyJ1IjoidGFyYW5nMDA0IiwiYSI6ImNsYjZjemN6ejAzaXozbm9icG94bnRyeHIifQ.JuvydUYsrlj-QgH_HN27Sw"
function App() {
  const [showPopup, setShowPopup] = React.useState(true);
  return (
    <Map
      initialViewState={{
        longitude: 88.3639,
        latitude: 22.5726,
        zoom: 14
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MY_ACCESS_TOKEN} >
      <Marker longitude={88.3639} latitude={22.5726} anchor="bottom" >
      <PlaceIcon />
    </Marker>
    {showPopup && (
      <Popup longitude={88.3639} latitude={22.5726}
        anchor="left"
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)}
    </Map>
  );
}

export default App;