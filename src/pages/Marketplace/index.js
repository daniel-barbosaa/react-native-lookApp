import React from 'react';
import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {Box, Text, Touchable} from '../../components/index';


const Marketplace = () => {
    return (
       <>
        <Header title="Categories" right={() => <Touchable width="70px" onPress={() => alert('isso')}>
            <Icon name="bag" size={20}/>
        </Touchable>} />
       </>
    );
};


export default Marketplace;
