import React from 'react';
import {Box,Text,Title,Touchable, Cover, Spacer} from '../index';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../styles/theme.json';


const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];


const Post = () => {
    return (
        <Box fluid hasPadding>
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
            <Cover height="150px" width="100%" image="https://i.pinimg.com/236x/eb/03/b6/eb03b6918421d40135ef74975186112a.jpg" spacing="10px 0px" radius="10px"/>
            <Box row fluid align="center">
              <Box row align="center" fluid>
              {items.map(item => <Cover spacing="0px -12px 0px 0px" circle width="20px" border={`1px solid ${colors.light}`} height="20px" image="https://i.pinimg.com/564x/ca/40/70/ca4070db3363c227b0a6e5a16c06af6e.jpg" />)}
              <Text variant="small" spacing="0px 20px">Like by 10,098</Text>
              </Box>
              <Box row justify="flex-end">
                <Touchable spacing="0px 10px" width="24px">
                  <Icon name="heart" size={24} color={colors.danger} />
                </Touchable>
                <Touchable spacing="0px 10px 0px 0px" width="24px">
                  <Icon name="bubble" size={24} color={colors.muted} />
                </Touchable>
                <Touchable width="24px">
                  <Icon name="share" size={24} color={colors.muted} />
                </Touchable>
              </Box>
            </Box>
            <Spacer />
            <Text color="dark" small>Interview: Shoe Designer John Fluevog On New Book, Spirituality And ‘Slow Fashion’</Text>
        </Box>
    );
};

export default Post;
