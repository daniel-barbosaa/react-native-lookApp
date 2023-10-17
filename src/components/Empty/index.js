import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ActivityIndicator } from 'react-native';

import {colors} from '../../styles/theme.json';
import { Box, Spacer, Text } from '../';

const Empty = ({loading = false, messagem = 'Loading...' }) => {
    return (
        <Box justify="center" align="center" fluid>
            <Spacer size="30px"/>

            {!loading && <>
                <Icon name="exclamation" color={colors.primary} size={100}/>
                <Spacer size="30px"/>
            </>}

            {loading &&
            <>
                <ActivityIndicator size="large" />
                <Spacer size="20px"/>
            </>}
            <Text>{loading ? 'Carregando...' : messagem}</Text>
        </Box>
    );
};


export default Empty;


