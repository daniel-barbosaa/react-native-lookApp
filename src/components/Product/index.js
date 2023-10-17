import React,{useContext} from 'react';
import { Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';


import {Text, Box, Touchable, Cover, Spacer} from '../../components/index';
import { AppContext } from '../../contexts/app';

const Product = ({product, selected = false}) => {
    const {removeFromCart} = useContext(AppContext);
    const {navigate} = useNavigation();

    return (
       <Touchable onPress={() => {
        if (!selected){
            navigate('Product', {product});
        } else {
            Alert.alert('Deseja realmente remover?', 'Remover item do carrinho', [
                {
                    text: 'Cancel', style: 'cancel',
                },
                {
                    text: 'Remove', style: 'destructive', onPress: () => {removeFromCart(product?.id);},
                },
            ]);

        }

       }} hasPadding={!selected} row background="light" spacing={selected ? '5px 0px' : '0px 0px 1px 0'}>
        <Cover width="80px" height="80px"
        image={product?.cover}
        />
        <Box hasPadding style={{paddingBottom: 0, paddingTop: 0}}>
            {!selected && <Text color="dark">{product?.brand}</Text>}
            <Text color="dark" variant="small" bold >{product?.title}</Text>
            <Spacer />
            {selected && (
                <Box>
                    <Text color="dark" variant="small" >Size:{product?.size}</Text>
                </Box>
            )}

            <Box row width="100%" justify="space-between">

                <Text color="dark" variant="small">${product?.price}</Text>
                <Text color="danger" align="right"  variant="small">{selected ? 'remove' : 'Add to cart'}</Text>
            </Box>
        </Box>
       </Touchable>
    );
};


export default Product;
