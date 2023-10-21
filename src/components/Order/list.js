import React from 'react';
import {ScrollView, Spacer} from '../../components';
import Order from './index';



const OrderList = ({orders}) => {
    return (
        <ScrollView fluid background="light" hasPadding>
            {orders?.map(order => <Order order={order}/>)}
            <Spacer size="30px" />
        </ScrollView>
    );
};


export default OrderList;
