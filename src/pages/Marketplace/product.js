import React from 'react';

import {Box, Text,Touchable} from '../../components/index';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../components/Header';
import {} from 'stre'

const Product = () => {
    return (
        <>
            <Header title="Striped cardigan"
            goBack
            right={() =>
            <Touchable width="70px" onPress={() => alert('isso')}>
                <Icon name="bag" size={20}/>
            </Touchable>} />

        </>
    );
};


export default Product;
