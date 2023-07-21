import MapView, { Marker } from 'react-native-maps';

import { ButtonContainer, Container, InputSearchContainer } from "./styled";
import { useEffect, useState } from 'react';
import * as Location from '../../service/Location';
import { LocationDto } from '../../types/Location';
import { getCitiesNearBy } from '../../service/Cities';
import { getGasStations } from '../../service/GasStations';
import Button from '../../components/Button';
import InputSearch from '../../components/InputSearch';



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

    const handleGoToNearbyGasStation = () => {

    }

    return (
        <Container>
            <InputSearchContainer>
                <InputSearch 
                    placeholder='Procure por um posto'
                    value="florianopolis"
                />
            </InputSearchContainer>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation
                loadingEnabled
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
                            onPress={() => console.log(gasStation)}
                            pinColor={gasStation.repository >= 0.5 ? "green" : "red"}
                            key={gasStation.id}
                            coordinate={{
                                latitude: gasStation.coords.latitude, 
                                longitude: gasStation.coords.longitude
                            }}
                        />
                    ))
                }
            </MapView>
            <ButtonContainer>
                <Button 
                    iconName="color-fill-outline"
                    onPress={handleGoToNearbyGasStation}
                    text="Estação mais próxima"
                    size="md"
                />
            </ButtonContainer>
        </Container>
    )
}

export default Map;