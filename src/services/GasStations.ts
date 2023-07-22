import { api } from "../config/api";

import calculateDistance from "../utils/calculateDistance";

import { LocationDto } from "../types/Location";
import { GasStationDto } from "../types/GasStation";

export const getGasStations = async (city: number) => {
    try {
        const routeUrl = `/cities/${city}/gas_stations`;
        const { data } = await api.get(routeUrl);

        return data.data;
    } catch(err) {
        throw new Error(err);
    }
}

export const findGasStationNearbyMe = (myLocation: LocationDto, gasStations: GasStationDto[]) => {
    let gasStationNearBy;
    let shorterDistance = Number.MAX_VALUE;
  
    for (const gasStation of gasStations) {
      const distance = calculateDistance(myLocation.coords, gasStation.coords);

      if (distance < shorterDistance) {
        shorterDistance = distance;
        gasStationNearBy = {
            coords: {
                lat: gasStation.coords.latitude,
                lon: gasStation.coords.longitude
            }
        };
      }
    }

    return gasStationNearBy;
}

