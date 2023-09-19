import React from 'react';

import {Box,Text, AreaView,Touchable} from '../../components/index';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {colors} from '../../styles/theme.json';


const Header = ({title}) => {
    return (
        <Box fluid height="80px" justify="center" border={`1px solid ${colors.muted}50`}>
            <AreaView >
                <Touchable width="80px" justify="center" align="center" onPress={() => alert("fui clicado")}>
                  <Icon name="menu" size={20} color="black" />
                </Touchable>
                <Box align="center" justify="center">
                    <Text>{title}</Text>
                </Box>
                <Touchable width="80px">
                    <Text />
                </Touchable>
            </AreaView>
        </Box>
    );
};


export default Header;
