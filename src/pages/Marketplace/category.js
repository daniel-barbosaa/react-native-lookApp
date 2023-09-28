import React from 'react';
import Header from '../../components/Header';
import ProductList from '../../components/Product/list';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {Box, Text, Touchable} from '../../components/index';

const Category = () => {
    return (
        <>
        <Header title="Categoria X"  right={() =>
            <Touchable width="70px" onPress={() => alert('isso')}>
                <Icon name="bag" size={20}/>
            </Touchable>} />
            <ProductList />
        </>
    );
};


export default Category;
