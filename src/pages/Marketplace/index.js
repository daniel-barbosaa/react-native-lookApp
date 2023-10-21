/* eslint-disable react/no-unstable-nested-components */

import React,{useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Header from '../../components/Header';
import {Box, Text, Touchable} from '../../components/index';
import CategoryList from '../../components/Category/list';
import Empty from '../../components/Empty';
import api from '../../services/api';

const Marketplace = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const getCategory = async () => {
        try {
          setLoading(true);
          const {data: categoriData} = await api.get('/categories');
          setLoading(false);
          setCategories(categoriData);
        //   console.log(categoriData);
        } catch (err){
          setLoading(false);
          alert(err);
        }
      };

      // FOCUS, toda vez que tiver focus esse useEffect chama a função, ou seja quando essa tela receber foco
      useEffect(() => {
        const unsibscribe = navigation.addListener('focus', () => {
          getCategory();
        });

        return unsibscribe;
      }, [navigation]);



    return (
       <>
        <Header hasPadding title="Categories" right={() =>
        <Touchable width="70px" onPress={() => navigation.navigate('Cart')}>
            <Icon name="bag" size={20}/>
        </Touchable>}
        />
        {loading && <Empty loading />}
        {!loading && <CategoryList category={categories} />}
       </>
    );
};


export default Marketplace;
