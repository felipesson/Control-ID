import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from "../pages/Register";
import Dashboard from '../pages/Dashboard';
import RegistrarColab from '../pages/RegistrarColab';
import Consulta from '../pages/Consulta';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen 
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }} 
            />

            <Stack.Screen 
            name="Login"
            component={Login}
            options={{ headerShown: false }} 
            />

            <Stack.Screen
            name="Dashboard" 
            component={Dashboard}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Register" 
            component={Register}
            options={{ headerShown: false}}
            />
           

            <Stack.Screen
            name="RegistrarColab" 
            component={RegistrarColab}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name="Consulta" 
            component={Consulta}
            options={{ headerShown: false}}
            />

        </Stack.Navigator>
        
    );
}