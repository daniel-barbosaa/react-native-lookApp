import React from 'react';

import { StretchyScrollView } from 'react-native-stretchy';

import {Box, Spacer, Text,Title,Touchable, Button} from '../../components/index';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../components/Header';
import {colors} from '../../styles/theme.json';


const Product = () => {
    return (
        <>
            <Header background title="Striped cardigan"
            goBack
            right={() => (
            <Touchable hasPadding width="70px" onPress={() => alert('isso')}>
                <Icon name="bag" size={20}/>
            </Touchable>)}
            />
            <StretchyScrollView
                image={{
                    uri:'https://i.pinimg.com/564x/ca/40/70/ca4070db3363c227b0a6e5a16c06af6e.jpg',
                }}
                imageOverlay={
                    <Box background={`${colors.dark}`}  />
                }
                foreground={
                    <Box hasPadding justify="flex-end">
                        <Title bold color="light" variant="small">$1080</Title>
                    </Box>
                }

                >
                    <Box hasPadding background="light">
                        <Text color="black">TSHIRT</Text>
                        <Spacer />
                        <Title color="black">A.P.C. Collection Spring 2015</Title>
                        <Spacer size="30px"/>
                        <Text>Enjoy the beauty of italian cotton all over your body. This item will fit your body and warm you up all over and during spring. This item will fit your body and warm you up all over and during spring.And over and over again, this is the text.</Text>
                        <Spacer size="30px"/>
                        <Button block>
                            <Text color="light">Add to cart</Text>
                        </Button>
                    </Box>
                </StretchyScrollView>

        </>
    );
};


export default Product;
