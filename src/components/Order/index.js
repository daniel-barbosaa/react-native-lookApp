import React from 'react';
import {Box, Title, Text,Spacer} from '../index';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../styles/theme.json';

const Order = () => {
    return (
        <Box border={`1px solid ${colors.muted}80`} radius="5px" spacing="0px 0px 10px 0px">
            <Box width="100%" hasPadding row justify="space-between" align="center"
            style={{borderBottomWidth: 1, borderColor: `${colors.muted}50`}}
            >
                <Box row align="center" >
                    <Icon name="check" size={15} color={colors.success}/>
                    <Text color="success" spacing="0px 0px 0px 7px" variant="ultra-small">DELIVERED</Text>
                </Box>
                <Text variant="small">May 13, 2016 5:08 PM</Text>
           </Box>
           <Box hasPadding width="100%" style={{borderBottomWidth: 1, borderColor: `${colors.muted}50`}}>
            <Title variant="small">Order №1947034</Title>
            <Spacer />
            <Text variant="small">Tracking number: <Text variant="small" color="dark">IW3475453455</Text></Text>
           </Box>
           <Box width="100%" hasPadding row justify="space-between" align="center">
                <Text variant="small">VALUE OF ITEMS: <Text variant="small" color="dark">$80.58</Text></Text>
                <Text spacing="0px 0px 0px 10px" variant="small">QUANTITY: <Text color="dark">3</Text></Text>
           </Box>
        </Box>
    );
};


export default Order;
