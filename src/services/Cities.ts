import { BASE_URL } from "../utils/contants";

import { LocationDto } from "../types/Location";
import { api } from "../config/api";

export const getCities = async () => {
    try {
        const routeUrl = `${BASE_URL}/cities`;

        const { data } = await api.get(routeUrl);

        return data;
    } catch(err) {
        throw new Error(err);
    }
}

export const getCitiesNearBy = async (location: LocationDto) => {
    try {
        const  { coords } = location;
        const routeUrl = `${BASE_URL}/cities/nearby?latitude=${coords.lat}&longitude=${coords.lon}`;

        const { data } = await api.get(routeUrl);

        return data;
    } catch(err) {
        throw new Error(err);
    }
}