import React from 'react';
import {ScrollView} from '../../components';
import Product from './index';

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
  ];

const ProductList = () => {
    return (
        <ScrollView fluid>
            {items.map(item => <Product brand='Raf Simons' price="$1080" title='Large striped cardigan' cover="https://i.pinimg.com/236x/eb/03/b6/eb03b6918421d40135ef74975186112a.jpg"/>)}
        </ScrollView>
    );
};


export default ProductList;
