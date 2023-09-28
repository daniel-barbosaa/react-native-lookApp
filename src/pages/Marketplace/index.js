/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {Box, Text, Touchable} from '../../components/index';

import CategoryList from '../../components/Category/list';


const Marketplace = () => {
    return (
       <>
        <Header hasPadding title="Categories" right={() =>
        <Touchable width="70px" onPress={() => alert('isso')}>
            <Icon name="bag" size={20}/>
        </Touchable>}
        />
        <CategoryList />
       </>
    );
};


export default Marketplace;
