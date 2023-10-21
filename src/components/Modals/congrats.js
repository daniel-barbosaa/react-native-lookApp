import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {Box, Spacer, Text, Title,Button, Cover} from '../index';

const CongratsModal = () => {
    const {navigate} = useNavigation();
    return (
        <Box background="light" hasPadding
        justify="center"
        align="center"
        style={{position: 'absolute', zIndex: 9999,width: '100%', height: '100%'}}
        >
            <Spacer size="70px"/>
            <Cover background="transparent" width="200px" height="200px" source={require('../../assets/check-circle.png')}/>
            <Spacer size="50px"/>
            <Title>Congratulations!</Title>
            <Spacer />
            <Text align="center">
                Your items are on the way
                and should arrive shortly
            </Text>
            <Spacer size="50px"/>
            <Button bottom block onPress={() => {
               navigate('Orders');
               }}>
                 <Text color={'light'}>Track your order</Text>
                </Button>
        </Box>
    );
};


export default CongratsModal;
