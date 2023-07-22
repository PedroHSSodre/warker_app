import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

import StackRoutes from "./stack.routes";

import { LocationProvider } from "../contexts/Locatio";
import { GasStationProvider } from "../contexts/GasStation";

import theme from "../style/theme";

function Routes() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <StatusBar />
                <NavigationContainer>
                    <LocationProvider>
                        <GasStationProvider>
                            <StackRoutes />
                        </GasStationProvider>
                    </LocationProvider>
                </NavigationContainer>
            </SafeAreaProvider>
        </ThemeProvider>
    )
}

export default Routes;