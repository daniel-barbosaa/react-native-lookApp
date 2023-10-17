import React from 'react';

import {Box, Text, Touchable, Cover} from '../index';
import {colors} from '../../styles/theme.json';
import moment from 'moment';




const Story = ({story}) => {
    return (
        <Touchable onPress={() => alert('teste')} background="black"
        radius="10px"
        height="190px"
        spacing="0px 10px 0px"
        width="150px">
        <Cover width="100%" height="100%" image={story?.cover}>
            <Box hasPadding
                fluid
                background={`${colors.black}80`}
                justify="space-between"
            >
                <Cover circle width="40px" border={`1px solid ${colors.light}`} height="40px" image={story?.owner.photo} />
                <Box height="40px" justify="flex-end">
                    <Text color="light" bold variant="small">{story?.owner.username}</Text>
                    <Text color="light" variant="small">{moment(story?.createdAt).fromNow()}</Text>
                </Box>

            </Box>
        </Cover>
        </Touchable>
    );
};

export default Story;
