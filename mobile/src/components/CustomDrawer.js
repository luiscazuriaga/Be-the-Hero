import React, {useContext} from 'react';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import {Switch, StyleSheet} from 'react-native';

import { ThemeContext } from 'styled-components';

export default function CustomDrawer({ toggleTheme, ...props}) {
  const {title } = useContext(ThemeContext)
 
  
  return (
    <DrawerContentScrollView>
      <Switch 
          style={styles.SwitchBox}
          onChange={toggleTheme}
          value={title === 'dark'} //Checked
          trackColor={{ false: "#E02041", true: "#000000" }}
          thumbColor={title === 'dark' ? "#E02041" : "#FFF"}
          ios_backgroundColor="#3e3e3e"
      />
          
      <DrawerItem {...props}
          label="Theme"
          onPress={toggleTheme}
      />
    </DrawerContentScrollView>
    
  );
}
const styles = StyleSheet.create({
    SwitchBox:{
        width:160,
        top:"50%",
    },
  }
);
