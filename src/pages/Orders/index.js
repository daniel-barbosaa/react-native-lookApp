/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext, useNavigation} from 'react';

import Header from '../../components/Header';
import OrderList from '../../components/Order/list';
import {AppContext} from '../../contexts/app';
import api from '../../services/api';
import Empty from '../../components/Empty';
import { Spacer } from '../../components';

const Orders = ({navigation}) => {

    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const {user} = useContext(AppContext);

    const getOrders = async () => {
        try {
          setLoading(true);
        const {data: orderData} = await api.get('/orders', {
            params: {
                userId: user?.id,
            },
        });
        console.log(orders.length);
          setOrders(orderData);
          setLoading(false);
          console.log(user.id);
        //   console.log(categoriData);
        } catch (err){
          setLoading(false);
          alert(err);
        }
      };

      // FOCUS, toda vez que tiver focus esse useEffect chama a função, ou seja quando essa tela receber foco
      useEffect(() => {
        const unsibscribe = navigation.addListener('focus', () => {
          getOrders();
        });

        return unsibscribe;
      }, [navigation]);

    return (
        <>
            <Header title="Your Orders" />
            {loading && <Empty loading/>}
            {!loading && <OrderList orders={orders} />}
        </>
    );
};

export default Orders;
