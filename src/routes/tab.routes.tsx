import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from '../pages/Map';
import Favorites from '../pages/Favorites';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Map" 
            component={Map} 
        />
        <Tab.Screen 
            name="Favorites" 
            component={Favorites} 
        />
    </Tab.Navigator>
  );
}

export default TabRoutes;