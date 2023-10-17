import React from 'react';
import {ScrollView} from '../../components';
import Category from '../Category/index';


const CategoryList = ({category}) => {

    return (
        <ScrollView fluid style={{paddingTop: 20, paddingLeft: 20, paddingRight: 20}}>
            {category?.map(cat => <Category key={cat.id} category={cat} />)}
        </ScrollView>
    );
};


export default CategoryList;
