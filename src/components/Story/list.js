import React from 'react';
import {Box, Text, ScrollView} from '../../components/index';


const StoryList = () => {
    return (
        <Box fluid>
            <Box row fluid justify="space-between" hasPadding height="60px">
                <Text bold color="dark">Stories</Text>
                <Text color="danger" >Show All</Text>
            </Box>
           <ScrollView horizontal>
            {Array.from(Array(20)).map(item => <Text>Story</Text>)}
           </ScrollView>
        </Box>
    );
};

export default StoryList;

