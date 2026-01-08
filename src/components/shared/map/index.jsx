// import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from "../../../api/apiconfig";
import { useState, useEffect, useRef } from "react";
import {
  Map,
  APIProvider,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";

// const AnyReactComponent = ({ text }) => (
//   <div className="w-200-px bg-danger-900">
//     <h3>{text}</h3>
//   </div>
// );

// export default function Map() {
//   const nodeRef = useRef(null);
//   const [directions, setDirections] = useState(null);
//   const stops = [
//     { lat: 22.5693049, lng: 88.4340465 },
//     { lat: 22.685147, lng: 88.3785 },
//   ];

//   const origin = { lat: 22.5693049, lng: 88.4340465 };
//   const destination = { lat: 22.685147, lng: 88.3785 };

//   useEffect(() => {
//     if (!origin || !destination || !GOOGLE_API_KEY) return;

//     const directionsService = new google.maps.DirectionsService();
//     const waypoints = stops.map((location) => ({
//       location: new google.maps.LatLng(location.lat, location.lng),
//       stopover: true,
//     }));

//     directionsService.route(
//       {
//         origin: new google.maps.LatLng(origin.lat, origin.lng),
//         destination: new google.maps.LatLng(destination.lat, destination.lng),
//         waypoints: waypoints,
//         travelMode: google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           setDirections(result);
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       }
//     );
//   }, [origin, destination, stops, GOOGLE_API_KEY]);

//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <APIProvider apiKey={GOOGLE_API_KEY}>
//         <GoogleMap
//           center={origin}
//           zoom={10}
//           //   mapContainerStyle={{ height: "400px", width: "100%" }}
//         >
//           {/* {directions && <DirectionsRenderer directions={directions} />} */}
//         </GoogleMap>
//       </APIProvider>
//       {/* <GoogleMapReact
//         bootstrapURLKeys={{
//           key: GOOGLE_API_KEY,
//           libraries: ["places"],
//           id: "CUSTOM_SCRIPT_ID",
//         }}
//         defaultCenter={{
//           lat: Number(22.5693049),
//           lng: Number(88.4340465),
//         }}
//         defaultZoom={12}
//         ref={nodeRef}
//       >
//         <AnyReactComponent lat={22.685147} lng={88.3785} text="My Marker1" />
//         <AnyReactComponent
//           lat={22.5693049}
//           lng={88.4340465}
//           text="My Marker2"
//         />
//       </GoogleMapReact> */}
//     </div>
//   );
// }

export default function CustomMap() {
  const position = { lat: 22.5693049, lng: 88.4340465 };
  return (
    <div className="h-440-px">
      <APIProvider apiKey={GOOGLE_API_KEY}>
        <Map center={position} defaultZoom={15}>
          <Directons />
        </Map>
      </APIProvider>
    </div>
  );
}

function Directons() {
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
            origin:"HC9M+PJ Bidhannagar, Kolkata, West Bengal, India",
            destination:"College More, EN Block, Sector V, Bidhannagar, West Bengal",
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true
        }).then(res=>{
            directionsRenderer.setDirections(res)
            setRoutes(res.routes)
        })
    },[directionsServices, directionsRenderer])
console.log(routes)
  return null;
}
