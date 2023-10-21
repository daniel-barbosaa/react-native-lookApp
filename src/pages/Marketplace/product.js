import React, {useState, useEffect, useContext} from 'react';

import { StretchyScrollView } from 'react-native-stretchy';

import {Box, Spacer, Text,Title,Touchable, Button} from '../../components/index';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../components/Header';
import Picker from '../../components/Picker';
import {colors} from '../../styles/theme.json';
import {AppContext} from '../../contexts/app';


const Product = ({navigation, route}) => {
    const [size, setSize] = useState(null);

    useEffect(() => {
        setSize(product.sizes?.[0].value);
    }, [product]);

    const {product} = route?.params;
    const {addToCart} = useContext(AppContext);

    return (
        <>
            <Header background title={product.title}
            goBack
            right={() => (
            <Touchable hasPadding width="70px" onPress={() => navigation.navigate('Cart')}>
                <Icon name="bag" size={20}/>
            </Touchable>)}
            />
            <StretchyScrollView
                image={{
                    uri:product.cover,
                }}
                imageOverlay={
                    <Box background={`${colors.dark}40`}  />
                }
                foreground={
                    <Box hasPadding justify="flex-end">
                        <Title bold color="light" variant="small">${product.price}</Title>
                    </Box>
                }

                >
                    <Box hasPadding background="light">
                        <Text color="black">{product.type}</Text>
                        <Spacer />
                        <Title color="black">{product.title}</Title>
                        <Spacer size="30px"/>
                        <Text>{product.description}</Text>
                        <Spacer size="30px"/>
                        <Picker
                        title= "Size"
                        options={product?.sizes}
                            initialValue={product.sizes?.[0]?.value}
                            onChange={(value) => {
                                setSize(value);
                            }}
                            />
                        <Spacer size="30px"/>
                        <Button block onPress={() => {
                            addToCart({...product, size});
                            navigation.navigate('Cart');
                        }}>
                            <Text color="light">Add to cart</Text>
                        </Button>
                    </Box>
                </StretchyScrollView>

        </>
    );
};


export default Product;
