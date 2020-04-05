import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React , {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { SafeAreaProvider} from 'react-native-safe-area-context';



import Routes from './src/routes';

import CustomDrawer from './src/components/CustomDrawer';
import light from './src/style/theme/light';
import dark from './src/style/theme/dark'



 export default function App() {

  const [theme, setTheme] = useState(light)
 
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const Drawer = createDrawerNavigator();
  
return (
  <SafeAreaProvider>
   <ThemeProvider theme={theme}>
     <NavigationContainer>
       <Drawer.Navigator
          drawerContent={props => <CustomDrawer toggleTheme={toggleTheme} {...props} />}
          drawerContentOptions={{
            labelStyle:{
              color: theme.colors.text,
              fontSize:20,
            }
          }}
          initialRouteName="Routes"
          drawerStyle={{
            backgroundColor: theme.colors.drawerBackGround,
            width:'50%',
             }}
           >
         <Drawer.Screen name="Routes" component={Routes} />
       </Drawer.Navigator>
     </NavigationContainer>
   </ThemeProvider>
  </SafeAreaProvider>
   
  );
}

