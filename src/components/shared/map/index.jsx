// import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from "../../../api/apiconfig";
import { useState, useEffect, useRef } from "react";
import {
  Map,
  APIProvider,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";


export default function CustomMap({userOrigin, userDestination}) {
  const position = { lat: 22.5693049, lng: 88.4340465 };
  const [originSection,setOriginSection] = useState("");
  const [destinationSection, setDestinationSection] = useState("")
  
  useEffect(()=>{
    if(userOrigin){
      setOriginSection(userOrigin)
    }
    if(userDestination){
      setDestinationSection(userDestination)
    }
  },[userOrigin,userDestination])
  return (
    <div className="h-440-px">
      <APIProvider apiKey={GOOGLE_API_KEY}>
        <Map defaultCenter={position} defaultZoom={5}>
          <Directons origin={originSection} destination={destinationSection} />
        </Map>
      </APIProvider>
    </div>
  );
}

function Directons({origin,destination}) {
    const map = useMap()
    const routesLibrary = useMapsLibrary("routes")
    const [directionsServices, setDirectionsServices] = useState()
    const [directionsRenderer, setDirectionsRenderer] = useState()
    const [routes, setRoutes] = useState([])

    useEffect(()=>{
        if(!map || !routesLibrary) return
        setDirectionsServices(new routesLibrary.DirectionsService())
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({map}))
    },[map, routesLibrary])

    useEffect(()=>{
        if(!directionsServices || !directionsRenderer) return

        directionsServices.route({
            origin,
            destination,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true
        }).then(res=>{
            directionsRenderer.setDirections(res)
            setRoutes(res.routes)
        })
    },[directionsServices, directionsRenderer,origin,destination])
// console.log(routes)
  return null;
}
