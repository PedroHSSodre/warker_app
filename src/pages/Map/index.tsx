import MapView, { Marker } from 'react-native-maps';

import { Container } from "./styled";
import { useEffect, useState } from 'react';
import * as Location from '../../service/Location';
import { LocationDto } from '../../types/Location';
import { getCities, getCitiesNearBy } from '../../service/Cities';
import { getGasStations } from '../../service/GasStations';



function Map() {
    const [location, setLocation] = useState<LocationDto>({
        coords: {
            lat: 37.78825,
            lon: -122.4324,
        }
    });
    const [cities, setCities] = useState([]);
    const [nearBy, setNearBy] = useState({});
    const [gasStations, setGasStations] = useState([]);

    useEffect(() => {
        getMapsData();
    }, []);

    const getMapsData = async () => {
        const location = await Location.getLocation();
        const nearBy = await getCitiesNearBy(location);
        const gasStations = await getGasStations(nearBy.id)
        
        
        setLocation(location);
        setNearBy(nearBy);
        setGasStations(gasStations)
    }

    return (
        <Container>
             <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={{
                    latitude: location.coords.lat,
                    longitude: location.coords.lon,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                style={
                    {width: "100%", height: "100%"}
                }
            >
                {
                    gasStations.map(gasStation => (
                        <Marker 
                            key={gasStation.id}
                            coordinate={{
                                latitude: gasStation.coords.latitude, 
                                longitude: gasStation.coords.longitude
                            }}
                        />
                    ))
                }
            </MapView>
        </Container>
    )
}

export default Map;