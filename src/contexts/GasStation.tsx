import { createContext, useContext, useEffect, useState } from "react";

import { GasStationDto } from "../types/GasStation";

import * as GasStationService from '../services/GasStations';
import * as CitiesService from '../services/Cities';
import LocationContext from "./Locatio";

interface GasStationContextDto {
    gasStations: GasStationDto[];
}

const GasStationContext = createContext<GasStationContextDto>({} as GasStationContextDto);

export const GasStationProvider = ({ children }) => {
    const { region } = useContext(LocationContext);
    const [gasStations, setGasStations] = useState<GasStationDto[]>([]);

    useEffect(() => {
        handleGetStations();
    }, [region]);

    const handleGetStations = async () => {
        const nearBy = await CitiesService.getCitiesNearBy(region);
        const gasStations = await GasStationService.getGasStations(nearBy.id);

        setGasStations(gasStations);
    }
    return (
        <GasStationContext.Provider value={{ gasStations }}>
            {children}
        </GasStationContext.Provider>
    )
}

export default GasStationContext;
