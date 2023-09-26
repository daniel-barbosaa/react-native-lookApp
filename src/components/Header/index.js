import React from 'react';

import {Box,Text, AreaView,Touchable} from '../../components/index';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {colors} from '../../styles/theme.json';
import {useNavigation} from '@react-navigation/native';


const Header = ({title = 'Explore', right = null}) => {

    const navigation = useNavigation();


    return (
        <Box fluid height="80px" justify="center" border={`1px solid ${colors.muted}50`}>
            <AreaView >
                <Touchable width="80px" justify="center" align="center" onPress={() => navigation.openDrawer()}>
                  <Icon name="menu" size={20} color="black" />
                </Touchable>
                <Box align="center" justify="center">
                    <Text>{title}</Text>
                </Box>
                {right ? right() : <Touchable width="80px" />}
            </AreaView>
        </Box>
    );
};


export default Header;
