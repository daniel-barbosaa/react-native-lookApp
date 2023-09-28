import React from 'react';
import {colors} from '../../styles/theme.json';

import {Text, Cover, Touchable, Title, Spacer, Box} from '../';

const Category = ({title, description}) => {
    return (
        <Touchable width="100%" height="180px" radius="10px" spacing="10px 0px">
            <Cover width="100%" height="100%" image="https://i.pinimg.com/564x/ca/40/70/ca4070db3363c227b0a6e5a16c06af6e.jpg">
                <Box width="100%" justify="center" align="center" hasPadding background={`${colors.black}70`}>
                    <Title color="light" bold >{title}</Title>
                    <Text color="light">{description}</Text>
                </Box>
            </Cover>
        </Touchable>
    );

};

export default Category;
