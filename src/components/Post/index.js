import React from 'react';
import {Box,Text,Title,Touchable, Cover} from '../index';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../styles/theme.json';


const Post = () => {
    return (
        <Box hasPadding background="primary" fluid >
           <Box row align="center">
              <Cover width="40px" height="40px" circle image="https://i.pinimg.com/564x/ca/40/70/ca4070db3363c227b0a6e5a16c06af6e.jpg"/>
              <Box spacing="0px 0px 0px 10px">
                <Text bold color="dark">Daniel mendes</Text>
                <Text variant="small">2 min ago</Text>
              </Box>
              <Touchable align="flex-end" height="20px" width="70px">
                <Icon name="options" size={15} color={colors.muted}/>
              </Touchable>
           </Box>
            <Cover width="100%" height="100px" />
        </Box>
    );
};

export default Post;
