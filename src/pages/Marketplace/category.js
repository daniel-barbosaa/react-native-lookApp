/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Header from '../../components/Header';
import ProductList from '../../components/Product/list';
import Empty from '../../components/Empty';
import {Box, Text, Touchable} from '../../components/index';

import api from '../../services/api';


const Category = ({ route, navigation }) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const {category} = route?.params;

    const getProducts = async () => {
        try {
          setLoading(true);
        const {data: productData} = await api.get('/products', {
            params: {
                categoryId: category?.id,
            },
        });
          setLoading(false);
          setProducts(productData);
        //   console.log(categoriData);
        } catch (err){
          setLoading(false);
          alert(err);
        }
      };

      // FOCUS, toda vez que tiver focus esse useEffect chama a função, ou seja quando essa tela receber foco
      useEffect(() => {
        const unsibscribe = navigation.addListener('focus', () => {
          getProducts();
        });

        return unsibscribe;
      }, [navigation]);


    return (
        <>
        <Header title={category.title} goBack right={() =>
            <Touchable width="70px" onPress={() => navigation.navigate('Cart')}>
                <Icon name="bag" size={20}/>
            </Touchable>} />

            {loading && <Empty loading />}
            {!loading && <ProductList products={products} />}

        </>
    );
};


export default Category;
