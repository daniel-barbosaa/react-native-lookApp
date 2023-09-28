import React from 'react';

import {Box,Text, AreaView,Touchable} from '../../components/index';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {colors} from '../../styles/theme.json';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';


const Header = ({title = 'Explore', right = null}) => {

    const navigation = useNavigation();


    return (
        <View
            style={{borderBottomWidth: 0.5, borderBottomColor: `${colors.muted}`, backgroundColor: colors.light }}
        >
            <AreaView style={{flexDirection:'row' , width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <Touchable  width="70px" justify="center" align="center" onPress={() => navigation.openDrawer()} hasPadding>
                  <Icon name="menu" size={20} color="black" />
                </Touchable>
                <Box align="center" justify="center">
                    <Text>{title}</Text>
                </Box>
                {right ? right() : <Touchable hasPadding width="70px" />}
            </AreaView>
        </View>
    );
};


export default Header;
