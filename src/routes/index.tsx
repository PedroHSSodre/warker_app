import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

import StackRoutes from "./stack.routes";
import theme from "../style/theme";

function Routes() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <StatusBar />
                <NavigationContainer>
                    <StackRoutes />
                </NavigationContainer>
            </SafeAreaProvider>
        </ThemeProvider>
    )
}

export default Routes;