import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from './tab.routes';
import Home from '../pages/Home';

const Stack = createStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
            name="Home" 
            component={Home} 
        />
        <Stack.Screen 
            name="App"
            component={TabRoutes}
        />
    </Stack.Navigator>
  );
}

export default StackRoutes;