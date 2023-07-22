import { LocationDto } from "../types/Location";

import { api } from "../config/api";

export const getCities = async (perPage?: number) => {
    try {
        const { data } = await api.get(`/cities?per_page=${perPage || 10}`);

        return data;
    } catch(err) {
        throw new Error(err);
    }
}

export const getCitiesNearBy = async (location: LocationDto) => {
    try {
        const  { coords } = location;
        
        const routeUrl = `/cities/nearby?latitude=${coords.lat}&longitude=${coords.lon}`;
        const { data } = await api.get(routeUrl);

        return data;
    } catch(err) {
        throw new Error(err);
    }
}