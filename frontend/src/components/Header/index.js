import React , {useContext} from 'react';
import Switch  from 'react-switch';
import {ThemeContext} from 'styled-components'
import {shade} from 'polished';

import {Container} from './style';


export default function Header({ toggleTheme }) {
    const { colors, title, logo } = useContext(ThemeContext)

    

return(
<Container>
    <img src={logo} alt="BeTheHero" width={100}></img>
    <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.2,colors.secundary)}
        onColor={shade(0.5,colors.text)}
        offHandleColor={colors.secundary}
        onHandleColor={colors.text}
      />
</Container>
);

}

