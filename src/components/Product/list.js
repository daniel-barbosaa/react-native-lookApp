import React from 'react';
import {ScrollView} from '../../components';
import Product from './index';


const ProductList = ({products}) => {
    return (
        <ScrollView fluid>
            {products?.map(product => <Product key={product.id} product={product} />)}
        </ScrollView>
    );
};


export default ProductList;
