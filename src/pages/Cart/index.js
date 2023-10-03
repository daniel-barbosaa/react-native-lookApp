import React, {useState} from 'react';
import {Box, Text, ScrollView, Title,Spacer} from '../../components/index';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Product from '../../components/Product';
import { Button } from '../../components/index';

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },

  ];


const Cart = () => {

    const [tab, setTab] = useState('');
    return (
       <>
        <Header title="Cart" goBack/>
           <Tabs  tabs={[
            {
                label: 'Cart', value: 'cart',
            },
            {
                label: 'Payment', value: 'payment',
            },

           ]}
           active={tab}
           onChange={(value) => {
                setTab(value);
           } }
           />
           <ScrollView  hasPadding background="light">
            <Spacer size= "20px"/>
            <Title variant="ultra-small">Order number is 458765342</Title>
            <Spacer size= "20px"/>
            {tab === 'cart' &&
             <Box>
               {items.map(item => <Product brand="Raf Simons" price="$1080" title="Large striped cardigan" cover="https://i.pinimg.com/236x/eb/03/b6/eb03b6918421d40135ef74975186112a.jpg"
               selected
               />)}
               <Spacer />
               <Box row width="100%" height="25px" justify="space-between">
                <Text>Order:</Text>
                <Text color="dark">$410.50</Text>
               </Box>
               <Box row width="100%" height="25px" justify="space-between">
                <Text>Discount:</Text>
                <Text color="success">$ -44.50</Text>
               </Box>
               <Box row width="100%" height="25px" justify="space-between">
                <Text>Delivery:</Text>
                <Text color="dark">$10.00</Text>
               </Box>
               <Box row width="100%" height="25px" justify="space-between">
                <Text color="dark" bold>Total order:</Text>
                <Text color="dark" bold>$410.50</Text>
               </Box>
               <Spacer size="20px" />
               <Button bottom block onPress={() => {
                setTab('payment');
               }}>
                 <Text color={'light'}>Place Order</Text>
                </Button>
            </Box>}
            {tab === 'payment' &&
             <>
                <Title>Payment</Title>
            </>}
           </ScrollView>
       </>
    );
};

export default Cart;
