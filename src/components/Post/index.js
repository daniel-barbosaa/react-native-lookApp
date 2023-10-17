import React from 'react';
import {Box,Text,Title,Touchable, Cover, Spacer} from '../index';
import moment from 'moment';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../styles/theme.json';


const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];


const Post = ({post}) => {
    return (
        <Box fluid hasPadding>
           <Box row align="center">
              <Cover width="40px" height="40px" circle image={post?.owner?.photo}/>
              <Box spacing="0px 0px 0px 10px">
                <Text bold color="dark">{post?.owner.username}</Text>
                <Text variant="small">{moment(post?.createdAt).fromNow()}</Text>
              </Box>
              <Touchable align="flex-end" height="20px" width="70px">
                <Icon name="options" size={15} color={colors.muted}/>
              </Touchable>
           </Box>
            <Cover height="150px" width="100%" image={post.cover} spacing="10px 0px" radius="10px"/>
            <Box row fluid align="center">
              <Box row align="center" fluid>
              {post?.likeInfos?.photos?.map(photo => <Cover spacing="0px -12px 0px 0px" circle width="20px" border={`1px solid ${colors.light}`} height="20px" image={photo}/>)}
              <Text variant="small" spacing="0px 20px">{post?.likeInfos?.description}</Text>
              </Box>
              <Box row justify="flex-end">
                <Touchable spacing="0px 10px" width="24px">
                  <Icon name="heart" size={24} color={colors[post?.isLiked ? 'danger' : 'muted']} />
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
            <Text color="dark" small>{post?.description}</Text>
        </Box>
    );
};

export default Post;
