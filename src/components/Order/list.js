import React from 'react';
import {ScrollView} from '../../components';
import Order from './index';

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

const OrderList = () => {
    return (
        <ScrollView fluid background="light" hasPadding>
            {items.map(item => <Order/>)}
        </ScrollView>
    );
};


export default OrderList;
