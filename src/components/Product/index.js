import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Text, Box, Touchable, Cover, Spacer} from '../../components/index';



const Product = ({cover, brand, title, price}) => {
    const {navigate} = useNavigation();

    return (
       <Touchable onPress={() => navigate('Product')} hasPadding row background="light" spacing="0px 0px 2px 0px">
        <Cover width="80px" height="80px"
        image={cover}
        />
        <Box hasPadding style={{paddingBottom: 0, paddingTop: 0}}>
            <Text color="dark" >{brand}</Text>
            <Text color="dark" variant="small" bold >{title}</Text>
            <Spacer />
            <Box row width="100%" justify="space-between">
                <Text color="dark">{price}</Text>
                <Text color="danger" align="right">Add to cart</Text>
            </Box>
        </Box>
       </Touchable>
    );
};


export default Product;
