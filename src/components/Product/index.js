import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Text, Box, Touchable, Cover, Spacer} from '../../components/index';



const Product = ({cover, brand, title, price, selected = false}) => {
    const {navigate} = useNavigation();

    return (
       <Touchable onPress={() => navigate('Product')} hasPadding={!selected} row background="light" spacing={selected ? '5px 0px' : '0px 0px 1px 0'}>
        <Cover width="80px" height="80px"
        image={cover}
        />
        <Box hasPadding style={{paddingBottom: 0, paddingTop: 0}}>
            {!selected && <Text color="dark">{brand}</Text>}
            <Text color="dark" variant="small" bold >{title}</Text>
            <Spacer />
            {selected && (
                <Box>
                    <Text color="dark" variant="small" >Size: GG</Text>
                </Box>
            )}

            <Box row width="100%" justify="space-between">

                <Text color="dark" variant="small">{price}</Text>
                <Text color="danger" align="right"  variant="small">{selected ? 'remove' : 'Add to cart'}</Text>
            </Box>
        </Box>
       </Touchable>
    );
};


export default Product;
