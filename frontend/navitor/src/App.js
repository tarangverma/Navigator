import * as React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map , {Marker , Popup} from 'react-map-gl';
import "./App.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import PlaceIcon from '@mui/icons-material/Place';
import axios from "axios";

const MY_ACCESS_TOKEN = "pk.eyJ1IjoidGFyYW5nMDA0IiwiYSI6ImNsYjZjemN6ejAzaXozbm9icG94bnRyeHIifQ.JuvydUYsrlj-QgH_HN27Sw"
function App() {
  const [showPopup, setShowPopup] = React.useState(true);
  const [pins , setPins] = React.useState([])

  React.useEffect(() => {
    const getPins = async () =>{
     try {
      const res = await axios.get("/pins");
      setPins(res.data)  
     } catch (err) {
      console.log(err);
     }
    };
    getPins();
    }, []);
    
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
       
     {pins.map(p=> (
<>
       <Marker longitude={p.lon} latitude={p.lat} anchor="bottom" >
       <PlaceIcon />
       </Marker>
     { showPopup && (
      <Popup longitude={p.lon} latitude={p.lat}
      anchor="left"
      onClose={() => setShowPopup(true)}>
        <div className='card'>
          <label>Place</label> 
        <h4 className='place'>{p.title}</h4>
        <label>Review</label>
        <p className='desc'>{p.desc}</p>
        <label>Rating</label>
        <div className='stars'>  
        <StarRateIcon className='star' />
        <StarRateIcon className='star' />
        <StarRateIcon className='star' />
        <StarRateIcon className='star' />
        <StarRateIcon className='star' />
        </div>
        <label>Information</label>
        <span className='username'>Created by <b>{p.username}</b></span>
        <span className='date'>1 hour ago</span>
        </div>
      </Popup>
      )}</>
     ))}  
    </Map>
  );

}

export default App;