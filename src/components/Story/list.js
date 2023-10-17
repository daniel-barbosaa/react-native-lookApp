import React from 'react';
import {Box, Text, ScrollView} from '../../components/index';
import Story from '.';



const StoryList = ({stories}) => {
    return (
        <Box fluid >
            <Box row fluid justify="space-between" hasPadding height="60px">
                <Text bold color="dark">Stories</Text>
                <Text color="danger" >Show All</Text>
            </Box>
           <ScrollView horizontal style={{paddingLeft: 10}}>
            {stories?.map(story => <Story story={story} key={story.id}/>)}
           </ScrollView>
        </Box>
    );
};

export default StoryList;

