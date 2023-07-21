import axios from "axios";

import { BASE_URL } from "../utils/contants";

export const getGasStations = async (city: number) => {
    try {
        console.log(city)
        const routeUrl = `${BASE_URL}/cities/${city}/gas_stations`;
        const { data } = await axios.get(routeUrl);

        return data.data;
    } catch(err) {
        
        throw new Error(err);
    }
}