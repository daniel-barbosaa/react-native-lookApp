import React from 'react';

import {Box, Text, Touchable, Cover} from '../index';



const Story = () => {
    return (
        <Touchable onPress={() => alert('teste')} background="black"
        radius="10px"
        height="190px"
        spacing="0px 10px 0px"
        width="150px">
            <Cover  image="https://i.pinimg.com/564x/ca/40/70/ca4070db3363c227b0a6e5a16c06af6e.jpg"/>
        </Touchable>
    );
};

export default Story;
