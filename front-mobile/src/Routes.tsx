import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";

const Stack = createStackNavigator();

function Routes() {
    return (
        //Semelhante ao BrowserRouter do react-dom
        //Encapsula as rotas da aplicação
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    //Telas da aplicação com fundo branco
                    cardStyle: {
                        backgroundColor: '#FFF'
                    }
                }}>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
                <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
