import MapView, { Marker } from 'react-native-maps';
import { useContext } from 'react';

import { ButtonContainer, Container, InputSearchContainer } from "./styled";

import Button from '../../components/Button';
import CitiesAutoComplete from '../../components/CitiesAutoComplete';

import { LocationDto } from '../../types/Location';
import LocationContext from '../../contexts/Locatio';
import GasStationContext from '../../contexts/GasStation';

function Map() {
    const { 
        handleGoToNearbyGasStation, 
        region, 
        setRegion 
    } = useContext(LocationContext);
    const { gasStations } = useContext(GasStationContext);

    return (
        <Container>
            <InputSearchContainer>
                <CitiesAutoComplete 
                    selectAction={(location: LocationDto) => setRegion(location)}
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
                region={{
                    latitude: region.coords.lat,
                    longitude: region.coords.lon,
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
                                longitude: gasStation.coords.longitude,
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