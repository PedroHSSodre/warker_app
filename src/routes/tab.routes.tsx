import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Map from '../pages/Map';
import Favorites from '../pages/Favorites';
import { Ionicons } from '@expo/vector-icons';
import theme from '../style/theme';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator 
      screenOptions={
        { 
          headerShown: false, 
          tabBarStyle: { 
            height: 75 
          }, 
          tabBarLabelStyle: {
            fontSize: 20, 
            color: theme.colors.GRAY_300 
          }
        }
      }
    >
        <Tab.Screen 
            name="Map" 
            options={{
              title: "Mapa",
              tabBarIcon: () => <Ionicons name='home-outline' size={theme.fontSize.md}/>
            }}
            component={Map} 
        />
    </Tab.Navigator>
  );
}

export default TabRoutes;