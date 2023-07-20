import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Map from '../pages/Map';
import Favorites from '../pages/Favorites';
import { Ionicons } from '@expo/vector-icons';
import theme from '../style/theme';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
            name="Map" 
            options={{
              title: "Mapa",
              tabBarIcon: () => <Ionicons name='home-outline' size={theme.fontSize.md}/>
            }}
            component={Map} 
        />
        <Tab.Screen 
            name="Favorites" 
            options={{
              title: "Favoritos",
              tabBarIcon: () => <Ionicons name='star-outline' size={theme.fontSize.md}/>
            }}
            component={Favorites} 
        />
    </Tab.Navigator>
  );
}

export default TabRoutes;