import * as Location from "expo-location";


export const getLocation = async () => {
    try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if(status === 'granted') {
            const location  = await Location.getCurrentPositionAsync({});

            const response = {
                coords: { 
                    lat: location.coords.latitude,
                    lon: location.coords.longitude
                 }
            }   
            
            return response;
        }
    } catch(err) {
        throw new Error(err);
    }
}