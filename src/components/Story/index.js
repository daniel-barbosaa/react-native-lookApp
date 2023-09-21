import React from 'react';

import {Box, Text, Touchable, Cover} from '../index';
import {colors} from '../../styles/theme.json';




const Story = () => {
    return (
        <Touchable onPress={() => alert('teste')} background="black"
        radius="10px"
        height="190px"
        spacing="0px 10px 0px"
        width="150px">
        <Cover width="100%" height="100%" image="https://i.pinimg.com/564x/ca/40/70/ca4070db3363c227b0a6e5a16c06af6e.jpg">
            <Box hasPadding
                fluid
                background={`${colors.black}80`}
                justify="space-between"
            >
                <Cover circle width="40px" border={`1px solid ${colors.light}`} height="40px" image="https://i.pinimg.com/564x/ca/40/70/ca4070db3363c227b0a6e5a16c06af6e.jpg" />
                <Box height="40px" justify="flex-end">
                    <Text color="light" bold variant="small">Daniel Mendes</Text>
                    <Text color="light" variant="small">2 min ago</Text>
                </Box>

            </Box>
        </Cover>
        </Touchable>
    );
};

export default Story;
