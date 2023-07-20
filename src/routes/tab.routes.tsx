import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Map from '../pages/Map';
import Favorites from '../pages/Favorites';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
            name="Map" 
            options={{
              title: "Mapa"
            }}
            component={Map} 
        />
        <Tab.Screen 
            name="Favorites" 
            options={{
              title: "Favoritos"
            }}
            component={Favorites} 
        />
    </Tab.Navigator>
  );
}

export default TabRoutes;