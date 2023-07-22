import React, { createContext, useCallback, useEffect, useState } from "react";

import * as LocationService from '../services/Location';
import * as CitiesService from '../services/Cities';
import * as GasStationService from '../services/GasStations';

import { LocationDto } from "../types/Location";

interface LocationContextDto {
    myLocation: LocationDto;
    region: LocationDto;
    handleGoToNearbyGasStation: () => void;
    setRegion: (location: LocationDto) => void;
}
const LocationContext = createContext<LocationContextDto>({} as LocationContextDto);

export const LocationProvider = ({ children }) => {
    const initialCoords = {
        coords: {
            lat: 37.78825,
            lon: -122.4324
        }
    }
    const [myLocation, setMyLocation] = useState<LocationDto>(initialCoords);
    const [region, setRegion] = useState<LocationDto>(initialCoords);

    useEffect(() => {
        getMapsData();
    }, []);

    const getMapsData = async () => {
        const location = await LocationService.getUserLocation();
        
        setMyLocation(location);
        setRegion(location);
    }

    const handleGoToNearbyGasStation = async () => {
        const nearBy = await CitiesService.getCitiesNearBy(myLocation);
        const gasStations = await GasStationService.getGasStations(nearBy.id);
        
        const gasStatationNearbyMe = GasStationService.findGasStationNearbyMe(myLocation, gasStations);
        
        setRegion(gasStatationNearbyMe);
    }

    return (
        <LocationContext.Provider 
            value={{ 
                myLocation, 
                region, 
                handleGoToNearbyGasStation, 
                setRegion 
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContext;
