import React from 'react';
import {Box, Title, Text,Spacer} from '../index';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../styles/theme.json';
import moment from 'moment';

const Order = ({order}) => {
    const stepEnum = {
        waiting: {
            icon: 'clock', color: 'warning',
        },
        delivered: {
            icon: 'check', color: 'success',
        },
        canceled: {
            icon: 'close', color: 'danger',
        },
    };

    const stepData = stepEnum[order?.step];


    return (
        <>
            <Box border={`1px solid ${colors.muted}80`} radius="5px" spacing="0px 0px 10px 0px">
            <Box width="100%" hasPadding row justify="space-between" align="center"
            style={{borderBottomWidth: 1, borderColor: `${colors.muted}50`}}
            >
                <Box row align="center" >
                    <Icon name="check" size={15} color={colors[stepData.color]}/>
                    <Text color={stepData.color} spacing="0px 0px 0px 7px" variant="ultra-small">{order.step.toUpperCase()}</Text>
                </Box>
                <Text variant="small">{moment(order?.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
           </Box>
           <Box hasPadding width="100%" style={{borderBottomWidth: 1, borderColor: `${colors.muted}50`}}>
            <Title variant="small">Order №{order.orderNumber}</Title>
            <Spacer />
            <Text variant="small">Tracking number: <Text variant="small" color="dark">{order?.trackingNumber}</Text></Text>
           </Box>
           <Box width="100%" hasPadding row justify="space-between" align="center">
                <Text variant="small">VALUE OF ITEMS: <Text variant="small" color="dark">$ {order?.totalValue}</Text></Text>
                <Text spacing="0px 0px 0px 10px" variant="small">QUANTITY: <Text color="dark">{order.totalItems}</Text></Text>
           </Box>
        </Box>
        </>
    );
};


export default Order;
